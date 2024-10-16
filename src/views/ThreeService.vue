<template>
    <div class=" flex m-0 p-0  overflow-x-hidden bg-[#ECECF3]">

      

            <SidBar  class=" w-1/5"></SidBar>

          
        
        
        <div class=" w-4/5">
            
            <NavBarVisitore></NavBarVisitore>

            <div class="  relative mx-20">
               <div class=" bg-white rounded-lg flex gap-3 p-4 shadow-sm   shadow-[#503E9D] ">
                  <img src="../assets/img/visitMain.jpg" class=" w-52" alt="">
                  <div class=" grid text-start">
                    <span class=" text-5xl text-purple-950 fw-bold">معين</span>
                    <span class=" fw-bold">هو مساعدك الذكي في رحلتك التعليمية</span>
                    <span class=" text-xs fw-bold">استعد لاكتشاف تجربة دراسية مميزة في معين نساعدك على تحقيق التفوق الاكاديمي بطرف مبتكرة ذكيية</span>
                    <span> <router-link to="/services" class=" px-14 py-1 bg-[#FAAE17] rounded-lg text-white">المزيد</router-link></span>
                  </div>
               </div>
            </div>
            
            <div class=" text-start my-2 text-[#503E9D] font-bold px-10">
                خدمات معين
            </div>

            <div class="flex justify-around mx-10 gap-1 mb-4">

                <!--  -->
                <div class=" w-72 p-3  rounded overflow-hidden bg-white   shadow-sm   shadow-[#503E9D] ">
                    <img class=" w-52  mx-auto" src="../assets/img/moeen.png" alt="Sunset in the mountains">
                    <div class="px-6 py-2">
                      <div class="font-bold text-xl mb-2 text-[#503E9D]">معين</div>
                      <p class="text-gray-700 text-sm py-6">
                        منصة معين تقدم حلا مبتكرا للمذاكرة التقليدية من خلال تحويل المحتوى النصي , الصوتي , والمرئي الى ملخصات و رسوم بيانية
                      </p>
                    </div>
                    <div class="px-6 pt-0 pb-2">

                        <router-link   to="/services/services1" type="button" class=" text-sm bg-[#503E9D]  w-52   text-white font-bold py-2 px-4 rounded"> تعرف على معين</router-link>
                
                    </div>
                  </div>
                <!--  -->

                 <!--  -->
                 <div class="w-72 p-3 rounded overflow-hidden bg-white  shadow-sm   shadow-[#503E9D] ">
                    <img class="w-52 mx-auto" src="../assets/img/question_moeen.png" alt="Sunset in the mountains">
                    <div class="px-6 py-2">
                      <div class="font-bold text-xl mb-2 text-[#503E9D] ">أسال معين</div>
                      <p class="text-gray-700 text-sm py-6">
                        تتيح هذه الخدمة للطلاب طرح أي سؤال يتعلق بالمادة الدراسية، وتقوم المنصة بتبسيط الإجابة وتسهيل فهمها. تحرص مُعيـــن على تقديم المعلومات بطريقة تسهل على الطالب استيعابها، </p>
                    </div>
                    <div class="px-6 pt-0 pb-2">
                        <router-link to="/services/chat" type="button" class=" text-sm bg-[#503E9D]  w-52   text-white font-bold py-2 px-4 rounded"> اسال معين</router-link>
                
                    </div>
                  </div>
                <!--  -->

                 <!--  -->
                 <div class="w-72 p-3 rounded overflow-hidden bg-white shadow-sm  shadow- [#503E9D]">
                    <img class="w-52 mx-auto" src="../assets/img/tawwen.png" alt="Sunset in the mountains">
                    <div class="px-6 py-2">
                      <div class="font-bold text-xl mb-2  text-[#503E9D] ">تعاون</div>
                      <p class="text-gray-700 text-sm py-6 ">
                      توفر منصة مُعيـــن غرفًا خاصة يمكن للطلاب من خلالها التواصل مع زملائهم والتحدي في مسابقات جماعية تساعد على المذاكرة. تسهم هذه الخدمة في تعزيز التعاون والمنافسة البناءة بين الطلاب                      </p>
                    </div>
                    <div class="px-6 pt-0 pb-2">
                        <router-link to="/services/join" type="button" class=" bg-[#503E9D]  w-52   text-white font-bold py-2 px-4 rounded">انضم لتعاون</router-link>
                
                    </div>
                  </div>
                <!--  -->

            </div>

        </div>
      
   
    </div>
</template>

<script>
import NavBarVisitore from '../components/NavBarVisitore'
import SidBar from '../components/SidBar.vue'
export default{
    name:'VisitoreVue',
    components:{
        NavBarVisitore,
        SidBar,
    }

}
</script>