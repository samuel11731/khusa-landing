<template>
  <div class="font-sans overflow-x-hidden w-full">
    
    <div class="text-white bg-cover bg-center bg-no-repeat relative" style="background-image: url('/background.png');">
      
      <nav class="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto relative z-10" data-aos="fade-down">
        <div class="flex items-center gap-2">
          <img src="/Frame.png" alt="Khusapay Logo" class="h-15 w-auto object-contain" />
        </div>

        <div class="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
          <a href="#" class="hover:text-orange-500 transition">Home</a>
          <a href="#" class="hover:text-orange-500 transition">Solutions</a>
          <a href="#" class="hover:text-orange-500 transition">Company</a>
        </div>

        <div class="flex items-center gap-4">
          <button class="px-8 py-2.5 bg-orange-500 hover:bg-orange-600 rounded-full text-sm font-bold transition shadow-lg shadow-orange-500/20">
            Sign up
          </button>
          <button class="px-8 py-2.5 bg-white text-orange-500 hover:bg-gray-100 rounded-full text-sm font-bold transition">
            Sign in
          </button>
        </div>
      </nav>

      <div class="px-6 pt-20 pb-40 max-w-[1078px] mx-auto text-center flex flex-col items-center gap-[99px] relative z-10">
        
        <h1 class="text-[40px] md:text-[76px] font-light leading-[1.06] tracking-[-0.2px] drop-shadow-lg flex flex-col items-center gap-[27px] max-w-[980px] w-full" data-aos="zoom-in" data-aos-duration="1000">
          <span>The Ultimate <span class="text-[#F89521]">Payment &</span></span>
          <span class="text-[#F89521]">Settlement Platform</span>
        </h1>

        <div class="flex flex-wrap justify-center items-center gap-4" data-aos="fade-up" data-aos-delay="200">
          <span class="text-gray-400 text-sm font-medium mr-2">for</span>
          
          <a href="#" v-for="(category, index) in categories" :key="category"
             :data-aos="index % 2 === 0 ? 'flip-up' : 'flip-down'"
             :data-aos-delay="index * 100"
             class="px-6 py-2 bg-[#8B5E3C] hover:bg-[#6d4a30] hover:scale-105 active:scale-95 transition-all duration-300 rounded-full text-sm font-medium text-white shadow-sm"
          >
            {{ category }}
          </a>

          <button class="w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white transition duration-300 shadow-lg shadow-orange-500/30 hover:scale-110 active:scale-95 ml-2">
             <ChevronRight class="w-6 h-6" />
          </button>
        </div>

        <p class="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed font-light" data-aos="fade-up" data-aos-delay="300">
          Focus less on chasing payments and spend more time <br class="hidden md:block"/>
          growing your Business and planning for the future.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0 w-full">
          <div v-for="(feature, index) in features" :key="index"
               data-aos="fade-up"
               :data-aos-delay="index * 200"
               class="p-8 rounded-[32px] border backdrop-blur-md transition duration-500 group text-left relative bg-white/5 border-white/5 hover:bg-white/10"
          >
            <div v-if="feature.customImage" class="relative -mt-32 mb-12 w-full flex justify-center z-10" :class="feature.scale || 'scale-150'">
               <img :src="feature.customImage" alt="icon" class="w-48 h-48 object-contain drop-shadow-2xl" />
            </div>
            <div v-else class="w-16 h-16 rounded-full flex items-center justify-center mb-6 border transition relative"
                 :class="`bg-${feature.baseColor}-500/10 border-${feature.baseColor}-500/20`"
            >
               <div class="absolute inset-0 rounded-full blur-xl opacity-50 transition duration-500"
                    :class="`bg-${feature.baseColor}-500/30`"></div>
               <component :is="feature.icon" :class="`w-8 h-8 relative z-10 text-${feature.baseColor}-400`" />
            </div>
            <h3 class="text-3xl font-bold mb-3">
              {{ feature.titlePart1 }} <br/>
              <span :class="`text-${feature.baseColor}-400`">{{ feature.titlePart2 }}</span>
            </h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="flex justify-center mt-16">
           <span class="px-12 py-3 rounded-full border border-[#027D89] text-[#027D89] text-sm font-bold tracking-[0.25em] uppercase bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
              Sectors
            </span>
          </div>
    <div class="bg-white text-slate-800 pt-32 pb-12">
      <div class="max-w-[1078px] mx-auto px-6">
        
        <div class="text-center space-y-4 mb-32" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-light leading-tight text-slate-900">
            The future of settlements is digitally <br/>
            driven, efficient, secure and transparent.
          </h2>
          <h3 class="text-2xl md:text-3xl font-bold text-slate-900">
            Harness this power today!
          </h3>
        </div>

        <div class="w-full flex flex-col md:flex-row items-center justify-center gap-10 min-h-[500px] mb-20">
          <div class="max-w-md text-left z-0" data-aos="fade-right">
            <h3 class="text-[#F97316] text-4xl font-medium mb-2">Merchant <br/> Sector Solutions</h3>
            <p class="text-xl -gray-500 leading-relaxed">
              Khusapay is a merchant-centric, fintech powered settlement engine that offers the complete power of a bank to any establishment.
            </p>
          </div>
          <div class="relative z-10" data-aos="fade-left">
            <div class="relative w-[350px] h-[350px] flex items-end justify-center">
               
               <div class="absolute inset-0 rounded-full border-4 border-white shadow-2xl bg-gray-100 z-0"></div>

               <img 
                 src="/merchant-person.png" 
                 alt="Merchant" 
                 class="relative z-10 w-[130%] max-w-none h-auto object-contain mb-0" 
               />
            </div>
          </div>
          </div>
        <div class="w-full flex flex-col md:flex-row-reverse items-center justify-center gap-24 min-h-[400px] mb-20">
          
          <div class="max-w-md text-left" data-aos="fade-left">
            <h3 class="text-[#F97316] text-4xl font-medium mb-2">Government & public <br/> Sector Solutions</h3>
            <p class="text-xl-gray-500 leading-relaxed">
              By enhancing collection of revenue and reducing leakages, Khusa Pay saves expenditure and ensures convenience.
            </p>
          </div>

          <div class="relative" data-aos="fade-right">
            <div class="relative w-[300px] h-[300px] flex items-end justify-center">
               
               <div class="absolute inset-0 rounded-full border-4 border-white shadow-2xl bg-gray-100 z-0"></div>

               <img 
                 src="/government-person.png" 
                 alt="Government" 
                 class="relative z-10 w-[130%] max-w-none h-auto object-contain mb-0" 
               />
            </div>
          </div>

        </div>

        <div class="w-full flex flex-col md:flex-row items-center justify-center gap-10 min-h-[400px]">
          
          <div class="max-w-md text-left" data-aos="fade-right">
            <h3 class="text-[#F97316] text-4xl font-medium mb-2">Consumer <br/> Sector Solutions</h3>
            
            <p class="text-xl-gray-500 text-lg leading-relaxed">
              Receive and disburse funds through multiple channels without worrying about the overhead of managing separate float accounts.
            </p>
          </div>

          <div class="relative" data-aos="fade-left">
            <div class="relative w-[300px] h-[300px] flex items-end justify-center">
               
               <div class="absolute inset-0 rounded-full border-4 border-white shadow-2xl bg-gray-100 z-0"></div>

               <img 
                 src="/consumer-person.png" 
                 alt="Consumer" 
                 class="relative z-10 w-[130%] max-w-none h-auto object-contain mb-0" 
               />
            </div>
          </div>
        </div>
       <div class="max-w-4xl mx-auto mt-32 mb-40">
          
          <div class="flex justify-start mb-4" data-aos="fade-up">
            <span class="px-3 py-1.5 rounded-full border border-[#F89521] text-[#F89521] text-xs font-bold tracking-[0.25em] uppercase bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
              Key Clients
            </span>
          </div>

          <div class="flex flex-col md:flex-row items-stretch gap-8">
            
            <div data-aos="zoom-in-up" class="bg-white rounded-[40px] p-8 max-w-sm w-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl transition duration-500 text-center group border border-gray-50 relative overflow-hidden flex flex-col">
              <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition duration-700"></div>
              
              <div class="w-[280px] h-[280px] mx-auto mb-8 relative flex items-center justify-center shrink-0">
                <div class="absolute inset-0 bg-orange-50 rounded-full scale-0 group-hover:scale-100 transition duration-500"></div>
                <img src="/icon-coin-new.png" alt="Governments" class="w-[260px] h-[260px] object-contain relative z-10 drop-shadow-lg" />
              </div>

              <h3 class="text-3xl font-bold mb-6 text-slate-900">Governments <br/> <span class="text-orange-500">& Public Sector</span></h3>
              
              <p class="text-gray-500 leading-relaxed mb-0 px-4">
                Governments can spur thriving economies by offering convenient access to public services and utilities.
              </p>
            </div>

            <div data-aos="zoom-in-up" data-aos-delay="200" class="bg-white rounded-[40px] p-8 max-w-sm w-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl transition duration-500 text-center group border border-gray-50 relative overflow-hidden flex flex-col">
               <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition duration-700"></div>

              <div class="w-[280px] h-[280px] mx-auto mb-8 relative flex items-center justify-center shrink-0">
                 <div class="absolute inset-0 bg-teal-50 rounded-full scale-0 group-hover:scale-100 transition duration-500"></div>
                <img src="/icon-coin-new.png" alt="Merchants" class="w-[260px] h-[260px] object-contain relative z-10 drop-shadow-lg" />
              </div>

              <h3 class="text-3xl font-bold mb-6 text-teal-600">Merchants</h3>
              
              <p class="text-gray-500 leading-relaxed mb-0 px-4">
                From corporations to businesses, Khusa Pay tracks all financial movements through virtual accounts.
              </p>
            </div>
          </div>
          
        </div>

        <div class="-mx-6 bg-[#FFFBF5] rounded-[40px] py-24 px-12 md:px-16 mb-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
            <div data-aos="fade-right">
              <span class="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-[#F89521] text-xs font-bold tracking-widest uppercase mb-6">
                Solutions
              </span>
              <h2 class="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Gain control over all financial transactions easily and securely
              </h2>
            </div>
            <div data-aos="fade-left" class="pt-2 lg:pt-16">
              <p class="text-gray-600 text-lg leading-relaxed">
                With Khusapay you will experience a simple, fast and efficient payment system again, again and again. Your transactions are fully protected against fraud and you can have peace of mind that your transactions are secure.
              </p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            <div data-aos="fade-up" data-aos-delay="0" class="group">
              <div class="mb-8 transform group-hover:-translate-y-2 transition duration-300">
                <img src="/icon-3d-cube.png" class="w-16 h-16 drop-shadow-xl" alt="icon"/>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-4">Complete Payment <br/> Transparency</h3>
              <p class="text-gray-500 text-sm leading-relaxed">
                Khusapay enables real-time settlements and reconciliations by enabling payments to various parties through virtual accounts.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" class="group">
              <div class="mb-8 transform group-hover:-translate-y-2 transition duration-300">
                <img src="/icon-3d-cube.png" class="w-16 h-16 drop-shadow-xl" alt="icon"/>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-4">Global Visibility & <br/> Tighter Controls</h3>
              <p class="text-gray-500 text-sm leading-relaxed">
                With complete control to track and manage settlements, Khusapay offers comprehensive reporting and management all in one.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" class="group">
              <div class="mb-8 transform group-hover:-translate-y-2 transition duration-300">
                <img src="/icon-3d-cube.png" class="w-16 h-16 drop-shadow-xl" alt="icon"/>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-4">Actionable Financial <br/> Information</h3>
              <p class="text-gray-500 text-sm leading-relaxed">
                Khusapay provides data and gives analytics that give insights on trends specific to services or customers.
              </p>
            </div>
          </div>
        </div>

        <div class="w-full mb-4"> 
            <div class="mb-8 ml-4 md:ml-0" data-aos="fade-right">
                <span class="text-orange-400 font-bold text-xs md:text-sm tracking-[0.2em] uppercase">Multi Channel Payments</span>
            </div>

            <div class="-mx-6 bg-[#F0F6FF] rounded-[40px] py-12 px-12 md:px-20 relative">
              <div class="flex flex-col lg:flex-row items-center justify-between gap-10">
                
                <div class="flex flex-col gap-10 lg:w-1/3 z-10">
                  
                  <div class="flex items-center gap-5 group">
                    <div class="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                      <img src="/icon-credit-card.png" alt="Credit Card" class="w-7 h-7 object-contain" />
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-slate-800 mb-1">Credit/Debit Cards</h3>
                      <p class="text-slate-500 text-sm leading-relaxed">Promptly send money to friends and pay bills on time.</p>
                    </div>
                  </div>

                  <div class="flex items-center gap-5 group">
                    <div class="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                      <img src="/icon-mobile-money.png" alt="Mobile Money" class="w-7 h-7 object-contain" />
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-slate-800 mb-1">Mobile Money</h3>
                      <p class="text-slate-500 text-sm leading-relaxed">Be assured privacy and security through use of tools.</p>
                    </div>
                  </div>
                </div>

                <div class="lg:w-1/3 flex justify-center relative z-20 -my-20 md:-my-32 order-first lg:order-none mb-10 lg:mb-0" data-aos="zoom-in" data-aos-duration="1200">
                  <img src="/hand-with-phone.png" alt="Khusapay App" class="w-[280px] md:w-[420px] max-w-none drop-shadow-2xl transform hover:scale-105 transition duration-500" />
                </div>

                <div class="flex flex-col gap-10 lg:w-1/3 z-10">
                  
                  <div class="flex items-center gap-5 group">
                    <div class="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                      <img src="/icon-bank.png" alt="Bank Account" class="w-7 h-7 object-contain" />
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-slate-800 mb-1">Bank Account</h3>
                      <p class="text-slate-500 text-sm leading-relaxed">Send money to or receive money from other users.</p>
                    </div>
                  </div>

                  <div class="flex items-center gap-5 group">
                    <div class="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                      <img src="/icon-transfer.png" alt="Bank Transfer" class="w-7 h-7 object-contain" />
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-slate-800 mb-1">Bank Transfer</h3>
                      <p class="text-slate-500 text-sm leading-relaxed">Easily withdraw money from any agent countrywide.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
        </div>

       <div class="-mx-6 bg-cover bg-center bg-no-repeat text-white rounded-[18px] pt-16 pb-0 px-12 md:px-16 relative overflow-hidden mb-0" style="background-image: url('/footer-bg.png');" data-aos="fade-up">
          
          <div class="flex flex-col lg:flex-row items-end justify-between gap-8 h-full">
            
            <div 
              class="lg:w-[55%] text-left z-30 pb-16"
              style="font-family: 'Helvetica Now Display', 'Helvetica Neue', Helvetica, Arial, sans-serif;"
            >
              <h2 class="text-3xl md:text-4xl font-light text-white mb-8 leading-tight">
                Khusapay's technology enables governments to do more. Our teams are available to help, every step of the way.
              </h2>
              
              <button class="group flex items-center gap-4 bg-[#F89521] hover:bg-orange-600 text-white pl-8 pr-2 py-2 rounded-full font-bold transition-all duration-300 shadow-lg shadow-orange-500/20">
                <span>Talk to us today</span>
                <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 group-hover:scale-105">
                  <ArrowUpRight class="w-6 h-6 text-[#F89521]" />
                </div>
              </button>
            </div>
            
            <div class="lg:w-[45%] relative h-[320px] w-full flex justify-center lg:justify-end z-0">
              
              <img 
                src="/phone-small.png" 
                alt="Large Phone" 
                class="h-full w-auto object-contain object-bottom absolute bottom-0 right-[60px] md:right-[100px] z-10 drop-shadow-2xl"
                data-aos="fade-up" 
                data-aos-delay="200"
              />
              
              <img 
                src="/phone-large.png" 
                alt="Small Phone" 
                class="h-[70%] w-auto object-contain absolute right-12 bottom-12 z-20 drop-shadow-2xl rounded-[2rem]"
                data-aos="fade-up" 
                data-aos-delay="400"
              />
            </div>

          </div>
        </div>

      </div>
    </div>

    <footer class="w-full text-white py-20 bg-cover bg-center bg-no-repeat" style="background-image: url('/footer-bg.png');">
      <div class="max-w-[1078px] mx-auto px-6">
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 border-white/10">
          
          <div class="space-y-4">
            <h4 class="text-sm text-white font-medium opacity-90">Find us at</h4>
            <p class="font-bold text-white leading-tight uppercase">
              SHARMA ELECTRICAL CONTRACTING
            </p>
            <p class="text-gray-200 text-sm leading-relaxed">
              Salmin Armour Road, Ginnery Corner <br/>
              P.O. Box 30343 <br/>
              Chichiri, Blantyre 3
            </p>
          </div>

          <div class="space-y-8">
            <div>
              <h4 class="text-sm text-white font-medium opacity-90 mb-1">Submit your enquiries to</h4>
              <a href="mailto:info@khusapay.com" class="text-[#F89521] font-bold hover:underline">info@khusapay.com</a>
            </div>
            <div>
              <h4 class="text-sm text-white font-medium opacity-90 mb-1">Talk to us on</h4>
              <a href="tel:+265999955015" class="text-[#F89521] font-bold hover:underline">+265 999 955 015</a>
            </div>
          </div>

          <div class="flex flex-row gap-4 items-start md:justify-end h-12">
            <a href="#" class="transition hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" class="h-10 md:h-12 w-auto" alt="Download on App Store"/>
            </a>
             <a href="#" class="transition hover:scale-105">
               <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" class="h-10 md:h-12 w-auto" alt="Get it on Google Play"/>
            </a>
          </div>

        </div>

        <hr class="border-white/20 mb-8" />

        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div class="flex items-center gap-2">
            <img src="/Frame.png" alt="Khusapay Logo" class="h-15 w-auto object-contain" />
          </div>
          
          <div class="text-xs text-gray-300 text-right">
            &copy; 2025 @khusapay. All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>

  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { 
    LayoutDashboard, ArrowLeftRight, LineChart, ChevronRight, 
    CreditCard, Landmark, ArrowUpRight, Smartphone 
  } from 'lucide-vue-next';

  const categories = ['Government', 'Merchants', 'Consumers', 'Corporates'];

  onMounted(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      mirror: true, 
      once: false,
    });
  });

  const features = [
    {
      titlePart1: 'Revenue',
      titlePart2: 'Collections',
      description: 'Khusapay is a merchant-centric, fintech powered settlement engine that offers the complete power of a bank to any establishment.',
      icon: LayoutDashboard,
      baseColor: 'orange',
      color: '#F97316', 
      customImage: '/card-icon-1.png',
      scale: 'scale-150'
    },
    {
      titlePart1: 'Payment',
      titlePart2: 'Aggregation',
      description: 'By enhancing collection of revenue and reducing leakages, Khusa Pay saves expenditure and ensures convenience.',
      icon: ArrowLeftRight,
      baseColor: 'pink',
      color: '#EC4899', 
      customImage: '/card-icon-2.png',
      scale: 'scale-125'
    },
    {
      titlePart1: 'Business',
      titlePart2: 'Intelligence',
      description: 'Receive and disburse funds through multiple channels without worrying about the overhead of managing separate accounts.',
      icon: LineChart,
      baseColor: 'blue',
      color: '#3B82F6', 
      customImage: '/card-icon-3.png',
      scale: 'scale-150'
    }
  ];
</script>

<style>
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>