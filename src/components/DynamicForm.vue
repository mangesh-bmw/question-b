<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit">
      <div v-for="block in formBlocks.blocks" :key="block.token" class="form-group">
        <label :for="block.token" >{{ block.props.title }}</label>
        <input
          v-if="block.type === 'text' || block.type === 'date'"
          :type="block.type"
          :id="block.token"
          :placeholder="block.props.placeholder"
          v-model="formData[block.token]"
          :required="isRequired(block)"
          class="form-control"
        />
        <input
          v-if="block.type === 'checkbox'"
          :type="block.type"
          :id="block.token"
          v-model="formData[block.token]"
          :checked="block.props.default"
          class="form-check-input"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div v-if="submitted.value" class="form-data">
      <h2>Form Data:</h2>
      <pre>{{ formData }}</pre>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const formBlocks = reactive({
      blocks: [
        {
          token: "PERSON_NAME",
          type: "text",
          props: {
            title: "Enter your name",
            required: true,
            placeholder: "Your Full Name"
          }
        },
        {
          token: "IS_PERSON_MINOR",
          type: "checkbox",
          props: {
            title: "Is the current person minor?",
            default: false
          }
        },
        {
          token: "PERSON_DOB",
          type: "date",
          props: {
            title: "Enter your DOB",
            required: "IS_PERSON_MINOR",
            placeholder: "e.g. 01/01/2000"
          }
        }
      ]
    });

    const formData = reactive({});
    const submitted = reactive({ value: false });

    const initializeFormData = () => {
      formBlocks.blocks.forEach(block => {
        if (block.type === "checkbox") {
          formData[block.token] = block.props.default;
        } else {
          formData[block.token] = "";
        }
      });
    };

    const isRequired = (block) => {
      if (typeof block.props.required === "boolean") {
        return block.props.required;
      }
      if (typeof block.props.required === "string") {
        return formData[block.props.required];
      }
      return false;
    };

    const handleSubmit = () => {
      // Validation
      for (const block of formBlocks.blocks) {
        if (isRequired(block) && !formData[block.token]) {
          alert(`${block.props.title} is required.`);
          return;
        }
      }
      // Submit form data
      submitted.value = true;
      console.log(formData);
    };

    // Initialize form data on component setup
    initializeFormData();

    return {
      formBlocks,
      formData,
      submitted,
      handleSubmit,
      isRequired
    };
  }
};
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 53px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.form-container label{
float: inline-start;

}

.form-check-input[type=checkbox]{

  position: relative;
  right:27%;
  bottom: 7px;

}
.form-group {
  margin-bottom: 15px;
}

.form-label {
  margin-bottom: 5px;
  font-weight: bold;
  text-align: left;
}

.form-control,
.form-check-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-check-input {
  margin-top: 10px;
  width: auto;
}
.form-check-input  checkbox {
  margin-top: 10px;
  width: auto;
}
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  display: block;
  margin: 20px 0;
  position: relative;
  left: 200px;
}

.btn:hover {
  background-color: #0056b3;
}

.form-data {
  margin-top: 20px;
  background-color: #e9ecef;
  padding: 15px;
  border-radius: 5px;
}

.form-data h2 {
  margin-top: 0;
}

.form-data pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>


