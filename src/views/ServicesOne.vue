<template>
    <div>
  
        <div class=" flex m-0 p-0  overflow-x-hidden bg-[#ECECF3]">

      

            <SidBar  class=" w-1/5"></SidBar>

          
        
        
        <div class=" w-4/5">
            
            <NavBarVisitore></NavBarVisitore>

            <div class=" text-ms text-start mx-10 text-[#503E9D] my-3" >
                الصفحة  الرئيسية &gt;  خدمات معين &gt; معين 

            </div>

            <div class=" text-white bg-[#503E9D]  mx-32 p-10 rounded-lg">
                يقوم مساعدك الذكي معين بتحليل النصوص والصور والاصوات والمقاطع المرئية وتحديد الافكار الرئيسية والمفاهيم الاساسبة
            </div>

            <div class=" mx-32 mt-5">
                
                <div class=" relative border border-dashed bg-white rounded-lg h-60  content-center">
                    <input id="upload" type="file" class=" h-full absolute top-0 opacity-0 " @change="handleFileUpload">  
                    <span >قم بسحب واسقاط الملف</span>

                    <span class=" bottom-0  absolute left-0 p-3">
                        <router-link to="tlkhes" class=" bg-[#503E9D] text-white px-1 rounded-lg py-2">تلخيص الملف</router-link >
                    </span>
                </div>
                <div class=" text-right text-sm text-gray-400">
                    الحجم الاقصى لحجم الملف 700 ميغا بايت تنسيق (mp4 , mp3 , jpg , pdf)
                </div>
            </div>
        </div>
        </div>
        </div>

</template>

<script>

import NavBarVisitore from '../components/NavBarVisitore'
import SidBar from '../components/SidBar.vue'
export default {
    name:'ServicesOne',
    components:{
        NavBarVisitore,
        SidBar,
    },
  data() {
    return {
      file: null
    };
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
    submitFile() {
      if (!this.file) {
        alert("No file selected");
        return;
      }

      const formData = new FormData();
      formData.append("file", this.file);
      console.log(formData);
      fetch("http://127.0.0.1:8001/upload", {
        method: "POST",
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log("File uploaded successfully", data);
      })
      .catch(error => {
        console.error("Error uploading file:", error);
      });
    }
  }
};

/*
var input = document.getElementById("upload");
	var doc = input.files[0];
*/

</script>