<template>
  <select v-model="onePick">
    <option v-for="SWF in SWFList" :value="SWF.value" :key="SWF.value">{{ SWF.text }}</option>
  </select>
  <div>선택하신 지역 {{SWFList[onePick].text}}</div>
</template>
<script>
export default {
  data() {
    return {
      onePick: "0",

      SWFList: [
        {text: "보기를 선택하세요", value: "0"},
        {text: "프라우드먼",value: "1"},
        {text: "YGX",value: "2"},
        {text: "Hook",value: "3"},
        {text: "라치카",value: "4"},
        {text: "코카N버터",value: "5"},
        {text: "웨이비",value: "6"},
        {text: "원트",value: "7"}
      ]
    }
  }
}


</script>

