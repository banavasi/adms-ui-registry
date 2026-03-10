import fs from 'fs-extra'

export function parseJsonc<T>(content: string, filePath: string): T {
  try {
    const withoutBom = content.replace(/^\uFEFF/, '')
    const withoutComments = stripJsonComments(withoutBom)
    const normalized = stripTrailingCommas(withoutComments)
    return JSON.parse(normalized) as T
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    throw new Error(`${filePath}: ${message}`)
  }
}

export function readJsoncSync<T>(filePath: string): T {
  return parseJsonc<T>(fs.readFileSync(filePath, 'utf-8'), filePath)
}

function stripJsonComments(content: string): string {
  let result = ''
  let inString = false
  let isEscaped = false
  let inLineComment = false
  let inBlockComment = false

  for (let index = 0; index < content.length; index += 1) {
    const char = content[index]
    const next = content[index + 1]

    if (inLineComment) {
      if (char === '\n' || char === '\r') {
        inLineComment = false
        result += char
      }
      continue
    }

    if (inBlockComment) {
      if (char === '*' && next === '/') {
        inBlockComment = false
        index += 1
        continue
      }

      if (char === '\n' || char === '\r') {
        result += char
      }
      continue
    }

    if (inString) {
      result += char

      if (isEscaped) {
        isEscaped = false
      } else if (char === '\\') {
        isEscaped = true
      } else if (char === '"') {
        inString = false
      }

      continue
    }

    if (char === '"') {
      inString = true
      result += char
      continue
    }

    if (char === '/' && next === '/') {
      inLineComment = true
      index += 1
      continue
    }

    if (char === '/' && next === '*') {
      inBlockComment = true
      index += 1
      continue
    }

    result += char
  }

  return result
}

function stripTrailingCommas(content: string): string {
  let result = ''
  let inString = false
  let isEscaped = false

  for (let index = 0; index < content.length; index += 1) {
    const char = content[index]

    if (inString) {
      result += char

      if (isEscaped) {
        isEscaped = false
      } else if (char === '\\') {
        isEscaped = true
      } else if (char === '"') {
        inString = false
      }

      continue
    }

    if (char === '"') {
      inString = true
      result += char
      continue
    }

    if (char === ',') {
      let lookahead = index + 1

      while (lookahead < content.length && /\s/.test(content[lookahead])) {
        lookahead += 1
      }

      const next = content[lookahead]
      if (next === '}' || next === ']') {
        continue
      }
    }

    result += char
  }

  return result
}
