<template>
  <div>
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">
            <slot name="title" />
          </h1>
          <p v-if="$slots.link" class="text-xs-center">
            <slot name="link" />
          </p>
          <form @submit.prevent="onSubmit">
            <fieldset>
              <slot name="form-group" />
              <button
                class="btn btn-lg btn-primary pull-xs-right"
                type="submit"
                @click="onSubmit"
              >
                <slot name="submit-button" />
              </button>
            </fieldset>
          </form>
          <slot name="sub-contents" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'FormContainer',
  setup(props, { emit }) {
    const onSubmit = () => {
      emit('on-submit')
    }

    return {
      onSubmit,
    }
  },
})
</script>
