<template>
  <div
    class="
      shadow-md
      sticky
      top-0
      left-0
      w-full
      p-4
      z-20
      flex flex-row
      justify-between
    "
  >
    Contacts
    <div
      class="
        duration-500
        text-gray-400 text-sm
        cursor-pointer
        hover:bg-gray-200
        rounded
        p-0.5
        px-2
        mr-3
      "
    >
      🚪 Log Out
    </div>
  </div>
  <div class="overflow-y-scroll h-full">
    <ContactListComponent />
    <div class="h-20"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContactListComponent from "@/modules/chat/components/ContactList.component.vue";

export default defineComponent({
  components: { ContactListComponent },
  name: "ContactList",
  setup() {
    return {};
  },
});
</script>

