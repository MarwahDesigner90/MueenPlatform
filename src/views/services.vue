<template>
    <div>
  
        <div class=" flex m-0 p-0  overflow-x-hidden bg-[#ECECF3]">

      

            <SidBar  class=" w-1/5"></SidBar>

          
        
        
        <div class=" w-4/5">
            
            <NavBarVisitore></NavBarVisitore>

            <div class=" text-ms text-start mx-10 text-[#503E9D] my-3" >
                الصفحة  الرئيسية &gt;  خدمات معين &gt; معين 

            </div>


            <div class=" mx-20 my-3">
                <div class=" bg-white flex justify-between rounded-lg p-3 ">
                    <div class=" text-start">
                        <div class=" text-3xl my-1"> مُعيـــن</div>
                        <div class=" text-xs my-1 mb-3">منصة مُعيـــن تقدم حلاً مبتكراً للمذاكرة التقليدية من خلال تحويل المحتوى النصي، الصوتي، والمرئي إلى ملخصات ورسوم بيانية.</div>
                        <div>
                            <router-link to="/services/ServicesOne" class=" bg-[#503E9D] text-white px-8 py-1 rounded-lg text-sm">تعرف على معين</router-link>
                        </div>
                    </div>

                    <div>
                        <img src="../assets/img/moeen.png" class="w-36" alt="">
                    </div>
                </div>
            </div>

            <div class=" mx-20 my-3">
                <div class=" bg-white flex justify-between rounded-lg p-3">
                    <div class=" text-start">
                        <div class=" text-3xl my-1">أسال  مُعيـــن  </div>
                        <div class=" text-xs my-1 mb-3">تتيح هذه الخدمة للطلاب طرح أي سؤال يتعلق بالمادة الدراسية، وتقوم المنصة بتبسيط الإجابة وتسهيل فهمها. تحرص مُعيـــن على تقديم المعلومات بطريقة تسهل على الطالب استيعابها، </div>
                        <div>
                            <router-link to="/services/chat" class=" bg-[#503E9D] text-white px-8 py-1 rounded-lg text-sm"> اسال معين  </router-link>
                        </div>
                    </div>

                    <div>
                        <img src="../assets/img/question_moeen.png" class="w-36" alt="">
                    </div>
                </div>
            </div>

            <div class=" mx-20 my-3">
                <div class=" bg-white flex justify-between rounded-lg p-3">
                    <div class=" text-start">
                        <div class=" text-3xl my-1">تعاون</div>
                        <div class=" text-xs my-1 mb-3">توفر منصة مُعيـــن غرفًا خاصة يمكن للطلاب من خلالها التواصل مع زملائهم والتحدي في مسابقات جماعية تساعد على المذاكرة. تسهم هذه الخدمة في تعزيز التعاون والمنافسة البناءة بين الطلاب. </div>
                        <div>
                            <router-link to="/services/join" class=" bg-[#503E9D] text-white px-8 py-1 rounded-lg text-sm"> انضم لتعاون </router-link>
                        </div>
                    </div>

                    <div>
                        <img src="../assets/img/tawwen.png" class="w-36" alt="">
                    </div>
                </div>
            </div>

        </div>

        </div>

        </div>
</template>

<script>

import NavBarVisitore from '../components/NavBarVisitore'
import SidBar from '../components/SidBar.vue'
export default{
    name : 'ServicesVue',
    components:{
        NavBarVisitore,
        SidBar,
    }
}
</script>
        