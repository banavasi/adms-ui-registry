<script setup lang="ts">
import { computed, ref } from 'vue'
import { ComboboxContent, ComboboxInput, ComboboxItem } from '@/components/ui/combobox'

const selectedValue = ref('')
const isInvalid = computed(() => !selectedValue.value)
const options = [
  { value: 'apple', label: 'Apple', disabled: false },
  { value: 'banana', label: 'Banana (Out of stock)', disabled: true },
  { value: 'orange', label: 'Orange', disabled: false },
  { value: 'grapes', label: 'Grapes (Out of stock)', disabled: true },
  { value: 'watermelon', label: 'Watermelon', disabled: false },
]
</script>

<template>
   <div style="width: 400px">
        <InputRoot id="color-select" :invalid="isInvalid" :required="true">
          <Label for="color-select">Favorite Color</Label>
          <ComboboxRoot>
            <Combobox v-model="selectedValue">
            <ComboboxInput placeholder="Select a color...">
              <ComboboxTrigger />
            </ComboboxInput>

            <ComboboxContent>
              <ComboboxItem
                v-for="option in options"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </ComboboxItem>
            </ComboboxContent>
          </Combobox>
          </ComboboxRoot>
          

          <InputError v-if="isInvalid">
            Please select your favorite color
          </InputError>
          <InputHelp v-else>
            Choose the color you like best
          </InputHelp>
        </InputRoot>
      </div>
</template>
