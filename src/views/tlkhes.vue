<template>
    <div>

        <div class=" flex m-0 p-0  overflow-x-hidden bg-[#ECECF3]">



            <SidBar class=" w-1/5"></SidBar>




            <div class=" w-4/5">

                <NavBarVisitore></NavBarVisitore>

                <div class=" text-ms text-start mx-10 text-[#503E9D] my-3">
                    الصفحة الرئيسية &gt; خدمات معين &gt; معين
                </div>

                <div>
                    <span class=" flex w-80 rounded-lg gap-4 text-white  bg-purple-700 mx-10 p-3">
                        <span class=" self-center">    قم باختيار شكل التصميم الذي تريده</span>
                        <svg class=" self-center" width="32" height="38" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6307 0C13.4058 0 14.0341 0.635382 14.0341 1.41915V6.14965C14.0341 6.93342 13.4058 7.5688 12.6307 7.5688C11.8556 7.5688 11.2273 6.93342 11.2273 6.14965V1.41915C11.2273 0.635382 11.8556 0 12.6307 0ZM3.68564 3.72727C4.23368 3.17305 5.12228 3.17301 5.67036 3.7272L8.94498 7.03832C9.49308 7.59251 9.4931 8.49107 8.94506 9.0453C8.39702 9.59954 7.50841 9.59956 6.96034 9.04538L3.68571 5.73425C3.13761 5.18007 3.1376 4.2815 3.68564 3.72727ZM21.5757 3.72724C22.1237 4.28146 22.1237 5.18001 21.5757 5.73422L18.301 9.04556C17.753 9.59979 16.8645 9.59979 16.3164 9.04556C15.7683 8.49136 15.7683 7.59281 16.3164 7.03858L19.591 3.72724C20.1391 3.17303 21.0276 3.17303 21.5757 3.72724ZM0 12.7723C0 11.9886 0.628335 11.3532 1.40341 11.3532H6.08145C6.85652 11.3532 7.48486 11.9886 7.48486 12.7723C7.48486 13.5561 6.85652 14.1915 6.08145 14.1915H1.40341C0.628335 14.1915 0 13.5561 0 12.7723ZM11.2273 14.167C11.2273 12.0347 13.7006 10.8844 15.3015 12.2721L31.134 25.9948C32.8368 27.4709 31.8675 30.293 29.6264 30.3836L22.4409 30.6743C21.6688 30.7055 20.9423 31.0517 20.4271 31.634L15.5346 37.1634C14.024 38.8707 11.2273 37.7901 11.2273 35.4992V14.167Z" fill="#FFDE59"/>
                            </svg>
                            
                    </span>
                </div>


                <div class="flex justify-around gap-4 mb-4 mx-14 mt-10">

                    <!--  -->
                   <router-link to="map">
                    <div class="   overflow-hidden bg-white shadow-sm  shadow-[#503E9D] card">
                        <img class=" mx-auto" src="../assets/img/mind map.png" alt="Sunset in the mountains">
                        <div class="kk">
                          <div class="font-bold text-xl   text-[#503E9D] ">خرائط المفاهيم</div>
                        </div>
                        
                      </div>

                    </router-link>

                      <div class="   overflow-hidden bg-white shadow-sm  shadow-[#503E9D] card">
                        <img class=" mx-auto" src="../assets/img/flashcard.png" alt="Sunset in the mountains">
                        <div class="kk">
                          <div class="font-bold text-xl   text-[#503E9D] ">بطاقات تفاعلية</div>
                        </div>
                        
                      </div>

                      <div class="   overflow-hidden bg-white shadow-sm  shadow-[#503E9D] card">
                        <img class=" mx-auto" src="../assets/img/q1.png" alt="Sunset in the mountains">
                        <div class="kk">
                          <div class="font-bold text-xl   text-[#503E9D] ">اختبارات</div>
                        </div>
                        
                      </div>
                    <!--  -->
                </div>

            </div>
        </div>
    </div>
</template>

<script>

import NavBarVisitore from '../components/NavBarVisitore'
import SidBar from '../components/SidBar.vue'
export default {
    name: 'TalkhesVue',
    components: {
        NavBarVisitore,
        SidBar,
    },
}
</script>

<style scoped>

.card{
    width: 331px;
  height:280px;
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
</style>