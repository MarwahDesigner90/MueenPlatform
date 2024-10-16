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

            <div class="flex justify-around gap-4 mb-4 mx-14">

                <!--  -->
                <div class="    rounded overflow-hidden bg-white   shadow-sm   shadow-[#503E9D] card">
                    <img class="   mx-auto" src="../assets/img/moeen.png" alt="Sunset in the mountains">
                    <div class="kk">
                      <div class="font-bold text-xl mb-2 text-[#503E9D]">معين</div>
                      <span class="text-gray-700 ">
                        منصة مُعيـــن تقدم حلاً مبتكراً للمذاكرة التقليدية من خلال تحويل المحتوى النصي، الصوتي، والمرئي إلى ملخصات ورسوم بيانية.  </span>
                    </div>
                    <div class=" pt-3">

                        <router-link   to="/services/ServicesOne" type="button" class="  bg-[#503E9D] rounded-lg text-sm p-3     text-white font-bold "> تعرف على معين</router-link>
                
                    </div>
                  </div>
                <!--  -->

                 <!--  -->
                 <div class="  rounded overflow-hidden bg-white  shadow-sm   shadow-[#503E9D] card ">
                    <img class=" mx-auto" src="../assets/img/question_moeen.png" alt="Sunset in the mountains">
                    <div class="kk">
                      <div class="font-bold text-xl mb-2 text-[#503E9D] ">أسال معين</div>
                      <span class="text-gray-700 ">
                        تتيح هذه الخدمة للطلاب طرح أي سؤال يتعلق بالمادة الدراسية، وتقوم المنصة بتبسيط الإجابة وتسهيل فهمها.  </span>
                    </div>
                    <div class="pt-3">
                        <router-link to="/services/chat" type="button" class="  bg-[#503E9D] rounded-lg text-sm p-3      text-white font-bold "> اسال معين</router-link>
                
                    </div>
                  </div>
                <!--  -->

                 <!--  -->
                 <div class="   overflow-hidden bg-white shadow-sm  shadow-[#503E9D] card">
                    <img class=" mx-auto" src="../assets/img/tawwen.png" alt="Sunset in the mountains">
                    <div class="kk">
                      <div class="font-bold text-xl   text-[#503E9D] ">تعاون</div>
                      <span class="text-gray-700  text-center ">
                        توفر منصة مُعيـــن غرفًا خاصة يمكن للطلاب من خلالها التواصل مع زملائهم والتحدي في مسابقات جماعية تساعد على المذاكرة.    </span>
                    </div>
                    
                    <div class="pt-3">
                        <router-link to="/services/join" type="button" class=" bg-[#503E9D] rounded-lg text-sm p-3      text-white font-bold">انضم لتعاون</router-link>
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

<style scoped>

.card{
  width: 331px;
height:380px;
top: 524px;
left: 812px;
padding: 3px 25px 3px 25px;
gap: 10px;
opacity: 0px;
border-radius: 25px
}

.card img{
  width: 194px;
height: 194px;
padding: 10px 0px 0px 0px;
gap: 10px;
opacity: 0px;

}

.card .kk {
  
height: 120px;
}
.card span{
  width: 281px;
height: 109px;
gap: 0px;
opacity: 0px;font-family: Cairo;
font-size: 12px;
font-weight: 600;
line-height: 22.49px;
text-align: center;

}

</style>