<template>
  <div class="font-sans overflow-x-hidden w-full">
    
    <div class="text-white bg-cover bg-center bg-no-repeat relative" style="background-image: url('/background.png');">
      <!-- Navbar -->
      <nav class="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto relative z-10" data-aos="fade-down">
        <div class="flex items-center gap-2">
          <img src="/Frame.png" alt="Khusapay Logo" class="h-10 md:h-15 w-auto object-contain" />
        </div>

        <div class="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
  <a href="#" class="hover:text-[#F89521]/80 transition">Home</a>
  <a href="#" class="hover:text-[#F89521]/80 transition">Solutions</a>
  <a href="#" class="hover:text-[#F89521]/80 transition">Company</a>
</div>

        <div class="flex items-center gap-4">
          <button class="px-4 py-1 md:px-8 md:py-2.5 bg-[#F89521] hover:bg-[#F89521]/80 rounded-full text-xs md:text-sm font-bold transition shadow-lg shadow-orange-orange/20">
            Sign up
          </button>
          <button class="px-4 py-1 md:px-8 md:py-2.5 bg-white text-black hover:bg-gray-100 rounded-full text-xs md:text-sm font-bold transition">
            Sign in
          </button>
        </div>
      </nav>

      <!-- Hero Section -->
      <div class="px-4 pt-10 md:pt-20 pb-10 md:pb-[65px] max-w-[1078px] mx-auto text-center flex flex-col items-center gap-6 md:gap-[27px] relative z-10">
        <div class="bg-gradient-to-br from-white to-[#F89521] xl:w-[980px] bg-clip-text">
          <h1 
            class="text-2xl md:text-[86px] font-light leading-[1.1] md:leading-[1] tracking-[-0.2px] flex flex-col items-center gap-2 md:gap-4 w-full text-transparent" 
            
            style="
              font-family: 'Inter', sans-serif;
            "
          >
            The Ultimate Payment &
            Settlement Platform
          </h1>
        </div>

        <div class="flex flex-wrap justify-center items-center gap-3 md:gap-4 mt-4 md:mt-8" data-aos="fade-up" data-aos-delay="200">
          <span class="text-gray-400 text-sm font-medium mr-2">for</span>
          
          <a href="#" v-for="(category, index) in categories" :key="category"
             :data-aos="index % 2 === 0 ? 'flip-up' : 'flip-down'"
             :data-aos-delay="index * 100"
             class="px-5 py-2 md:px-6 md:py-2 bg-[#8B5E3C] hover:bg-[#6d4a30] hover:scale-105 active:scale-95 transition-all duration-300 rounded-full text-xs md:text-sm font-medium text-white shadow-sm"
          >
            {{ category }}
          </a>

          <button class="w-10 h-10 md:w-8 md:h-8 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white transition duration-300 shadow-lg shadow-orange-500/30 hover:scale-110 active:scale-95 ml-2">
             <ChevronRight class="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        <p class="text-gray-300 max-w-4xl mx-auto text-[18px] md:text-[27px] leading-relaxed font-light mt-2 md:mt-2" data-aos="fade-up" data-aos-delay="300">
  Focus less on chasing payments and spend more time <br class="hidden md:block"/>
  growing your Business and planning for the future.
</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-6 w-full mt-20 md:mt-32">
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
            
            <h3 class="text-3xl md:text-4xl font-normal mb-3 tracking-tight text-white leading-tight">
              {{ feature.titlePart1 }} <br/>
              <span class="bg-clip-text text-transparent bg-gradient-to-r" :class="feature.gradient">
                {{ feature.titlePart2 }}
              </span>
            </h3>
            
            <p class="text-gray-200 text-sm leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Sectors -->
   <div class="flex justify-center mt-[34px]">
        <span class="px-[32px] py-[4px] rounded-full border-[2px] border-[#027D8921] text-[#366D88] text-[12px] font-bold tracking-[1.44px] uppercase bg-white">
          Sectors
        </span>
    </div>

    <div class="bg-white text-slate-800 pt-4 md:pt-8 pb-12">
      <div class="max-w-[1078px] mx-auto px-6">
        
        <div class="text-center space-y-4 mb-20 md:mb-32" data-aos="fade-up">
          <h2 class="text-[24px] md:text-[48px] font-light leading-tight text-slate-900">
            The future of settlements is digitally <br/>
            driven, efficient, secure and transparent.
          </h2>
          <h3 class="text-[28px] md:text-[48px] font-bold text-slate-900">
            Harness this power today!
          </h3>
        </div>
      <!-- merchant-centric -->
      <div class="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-[100px] min-h-[400px] md:min-h-[500px] mb-20">
          
          <div class="max-w-md text-left z-0 md:-mt-[120px]" data-aos="fade-right">
            
            <h3 class="text-[#F89521] text-3xl md:text-[36px] leading-tight md:leading-[41px] tracking-[0px] font-normal mb-6 md:mb-[33px]">
              Merchant <br/> Sector Solutions
            </h3>
            
            <p class="text-black text-lg md:text-[28px] leading-relaxed md:leading-[37px] tracking-[-0.2px]">
              Khusapay is a merchant-centric, fintech powered settlement engine that offers the complete power of a bank to any establishment.
            </p>
          </div>
          
          <div class="relative z-10 mt-4 md:mt-[80px]" data-aos="fade-left">
            <div class="relative w-[190px] h-[190px] md:w-[350px] md:h-[350px] flex items-end justify-center">
               <div class="absolute inset-0 rounded-full border-4 border-white shadow-2xl bg-gray-100 z-0"></div>
               <img src="/merchant-person.png" alt="Merchant" class="relative z-10 w-[130%] max-w-none h-auto object-contain mb-0" />
            </div>
          </div>
        </div>
        <!-- Government & public Sector Solutions -->
       <div class="w-full flex flex-col md:flex-row-reverse items-center justify-center gap-10 md:gap-[100px] min-h-[400px] md:min-h-[500px] mb-20">
          
          <div class="max-w-md text-left z-0 md:-mt-[120px]" data-aos="fade-left">
            
            <h3 class="text-[#F89521] text-3xl md:text-[36px] leading-tight md:leading-[41px] tracking-[0px] font-normal mb-6 md:mb-[33px]">
              Government & public <br/> Sector Solutions
            </h3>
            
            <p class="text-black text-lg md:text-[28px] leading-relaxed md:leading-[37px] tracking-[-0.2px]">
              By enhancing collection of revenue and reducing leakages, Khusa Pay saves expenditure and ensures convenience.
            </p>
          </div>
          
          <div class="relative z-10 mt-14 md:mt-[80px]" data-aos="fade-right">
            <div class="relative w-[190px] h-[190px] md:w-[350px] md:h-[350px] flex items-end justify-center">
               <div class="absolute inset-0 rounded-full border-4 border-white shadow-2xl bg-gray-100 z-0"></div>
               <img src="/government-person.png" alt="Government" class="relative z-10 w-[130%] max-w-none h-auto object-contain mb-0" />
            </div>
          </div>
        </div>
        <!-- Consumer Sector Solutions -->
     <div class="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-[100px] min-h-[400px] md:min-h-[500px]">
          
          <div class="max-w-md text-left z-0 md:-mt-[120px]" data-aos="fade-right">
            
            <h3 class="text-[#F89521] text-3xl md:text-[36px] leading-tight md:leading-[41px] tracking-[0px] font-normal mb-6 md:mb-[33px]">
              Consumer <br/> Sector Solutions
            </h3>
            
            <p class="text-black text-lg md:text-[28px] leading-relaxed md:leading-[37px] tracking-[-0.2px]">
              Receive and disburse funds through multiple channels without worrying about the overhead of managing separate float accounts.
            </p>
          </div>
          
          <div class="relative z-10 md:mt-[80px]" data-aos="fade-left">
            <div class="relative w-[190px] h-[190px] md:w-[350px] md:h-[350px] flex items-end justify-center">
               <div class="absolute inset-0 rounded-full border-4 border-white shadow-2xl bg-gray-100 z-0"></div>
               <img src="/consumer-person.png" alt="Consumer" class="relative z-10 w-[130%] max-w-none h-auto object-contain mb-0" />
            </div>
          </div>
        </div>
        <!-- Key Clients -->
      <div class="relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] w-screen mb-12">
          
          <div class="md:ml-[45px] md:mt-[10px] w-full h-auto border border-white relative">
            
            <div class="w-full h-full md:pt-[2px] md:pl-[234px] px-4 py-8 md:py-0">
              
             <div class="flex justify-start mb-[23.9px]" data-aos="fade-up">
                
                <span class="px-[20px] py-[5px] rounded-full border-[2px] border-[#F1F1F1] text-[#F89521] text-xs font-bold tracking-[1.44px] uppercase bg-white">
                  Key Clients
                </span>
              </div>

              <div class="flex flex-col md:flex-row items-stretch gap-8">
                
                <div data-aos="zoom-in-up" data-aos-delay="200" class="bg-white rounded-[40px] p-8 md:w-[400px] md:h-[640px] w-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] text-center group border border-gray-50 relative overflow-hidden flex flex-col">
                  <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition duration-700"></div>
                  <div class="w-[240px] h-[240px] md:w-[280px] md:h-[280px] mx-auto mb-8 relative flex items-center justify-center shrink-0">
                    <div class="absolute inset-0 rounded-full"></div>
                    <img src="/icon-coin-new.png" alt="Governments" class="w-full h-full object-contain relative z-10 drop-shadow-lg" />
                  </div>
                 <h3 class="text-[40px] tracking-[-0.23px] font-normal mb-6 text-[#F89521] leading-tight">
                    Governments <br/> 
                    <span class="text-[#F89521]">& Public Sector</span>
                  </h3>
                  <p class="text-black leading-relaxed mb-0 px-4">
                    Governments can spur thriving economies by offering convenient access to public services and utilities.
                  </p>
                </div>

                <div data-aos="zoom-in-up" data-aos-delay="200" class="bg-white rounded-[40px] p-8 md:w-[400px] md:h-[640px] w-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transition duration-500 text-center group border border-gray-50 relative overflow-hidden flex flex-col">
                   <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition duration-700"></div>
                  <div class="w-[240px] h-[240px] md:w-[280px] md:h-[280px] mx-auto mb-8 relative flex items-center justify-center shrink-0">
                     <div class="absolute inset-0 bg-teal-50 rounded-full scale-0"></div>
                    <img src="/icon-coin-new.png" alt="Merchants" class="w-full h-full object-contain relative z-10 drop-shadow-lg" />
                  </div>
                  <h3 class="text-[40px] tracking-[-0.23px] font-normal mb-16 text-[#027D89]">Merchants</h3>
                  <p class="text-black leading-relaxed mb-0 px-4">
                    From corporations to businesses, Khusa Pay tracks all financial movements through virtual accounts.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
        
       <!-- Solutions -->

<div class="w-[calc(100vw-32px)] md:w-[calc(100vw-82px)] relative left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#f5ebdd] via-[#f0ece5] via-10% to-[#e6f1f3] to-70% rounded-t-[30px] md:rounded-t-[30px] rounded-b-none pt-12 md:pt-[84px] px-6 md:pl-[143px] md:pr-16 pb-12 md:pb-24 mb-0 z-20">
  
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-24 items-start">
    <div data-aos="fade-right">
      
      <span class="inline-block px-[26px] py-[5px] rounded-full bg text-[#F89521] border-[2px] border-[#FFFFFF] text-xs font-bold tracking-widest uppercase mb-6">
        Solutions
      </span>

      <h2 class="text-3xl md:text-[40px] font-medium text-black leading-tight">
        Gain control over all financial transactions easily and securely
      </h2>
    </div>
    
    <div data-aos="fade-left" class="pt-0 md:pt-16 md:w-[115%] md:-ml-[40px]">
      <p class="text-[#000000] text-lg md:text-[24px] leading-relaxed tracking-[0]">
        With Khusapay you will experience a simple, fast and efficient payment system again, again and again. Your transactions are fully protected against fraud and you can have peace of mind that your transactions are secure.
      </p>
    </div>
  </div>
  

  <div class="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-16 mb-12">
    
    <div data-aos="fade-up" data-aos-delay="0" class="group">
      <div class="mb-6 md:mb-8 transform group-hover:-translate-y-2 transition duration-300">
        <img src="/icon-3d-cube.png" class="w-16 h-16 drop-shadow-xl" alt="icon"/>
      </div>
      <h3 class="text-xl md:text-[24px] font-bold text-[#1D275C] mb-4 md:mb-6">Complete Payment <br/> Transparency</h3>
      <p class="text-[#000000] text-base md:text-[18px] leading-relaxed tracking-[0]">
        Khusapay enables real-time settlements and reconciliations by enabling payments to various parties through virtual accounts.
      </p>
    </div>

    <div data-aos="fade-up" data-aos-delay="200" class="group">
      <div class="mb-6 md:mb-8 transform group-hover:-translate-y-2 transition duration-300">
        <img src="/icon-3d-cube.png" class="w-16 h-16 drop-shadow-xl" alt="icon"/>
      </div>
      <h3 class="text-xl md:text-[24px] font-bold text-[#1D275C] mb-4 md:mb-6">Global Visibility & <br/> Tighter Controls</h3>
      <p class="text-[#000000] text-base md:text-[18px] leading-relaxed tracking-[0]">
        With complete control to track and manage settlements, Khusapay offers comprehensive reporting and management all in one.
      </p>
    </div>

    <div data-aos="fade-up" data-aos-delay="400" class="group">
      <div class="mb-6 md:mb-8 transform group-hover:-translate-y-2 transition duration-300">
        <img src="/icon-3d-cube.png" class="w-16 h-16 drop-shadow-xl" alt="icon"/>
      </div>
      <h3 class="text-xl md:text-[24px] font-bold text-[#1D275C] mb-4 md:mb-6">Actionable Financial <br/> Information</h3>
      <p class="text-[#000000] text-base md:text-[18px] leading-relaxed tracking-[0]">
        Khusapay provides data and gives analytics that give insights on trends specific to services or customers.
      </p>
    </div>

  </div>


  <!--multi channel payments-->
 <div class="mt-12 md:mt-20 ml-0 md:ml-[0px]" data-aos="fade-right">
  
  <span class="inline-block px-[4px] py-[5px] rounded-full border-[2px] border-[#F1F1F1] font-bold uppercase text-[#F89521] text-[14px] leading-[16px] tracking-[1.44px]" style="font-family: 'Inter', sans-serif;">
    Multi Channel Payments
  </span>

</div>

<div class="w-full mt-12 mb-0 relative z-10 px-0 md:px-0"> 
  
  <div 
    class="mx-auto max-w-[1200px] w-full bg-contain bg-center bg-no-repeat relative py-12 md:py-24"
    style="background-image: url('/credit-card-mockup.png'); min-height: 600px;"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    
    <div class="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 px-6 relative z-10">
       
      <div 
        class="relative -mt-1 mb-8 flex justify-center md:absolute md:top-[-100px] md:left-1/3 md:-translate-x-1/2 md:mt-0 md:mb-0 z-20"
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <img 
          src="/hand-with-phone.png" 
          alt="Khusapay App" 
          class="w-[180px] md:w-[280px] max-w-none" 
        />
      </div>

      <div class="flex flex-col gap-8 md:gap-12 w-full md:w-1/3 pt-2 md:pt-0">
        <div class="flex items-center gap-4 group" data-aos="fade-right" data-aos-delay="300">
          <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-md">
            <img src="/icon-credit-card.png" alt="Credit Card" class="w-8 h-8 object-contain" />
          </div>
          <div>
            <h3 class="text-lg font-bold text-[#0F172A] mb-1">Credit/Debit Cards</h3>
            <p class="text-slate-500 text-xs md:text-sm leading-relaxed">Promptly send money to friends and pay bills on time.</p>
          </div>
        </div>
        <div class="flex items-center gap-4 group" data-aos="fade-right" data-aos-delay="400">
          <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-md">
            <img src="/icon-mobile-money.png" alt="Mobile Money" class="w-8 h-8 object-contain" />
          </div>
          <div>
            <h3 class="text-lg font-bold text-[#0F172A] mb-1">Mobile Money</h3>
            <p class="text-slate-500 text-xs md:text-sm leading-relaxed">Be assured privacy and security through use of tools.</p>
          </div>
        </div>
      </div>

      <div class="hidden md:block w-1/3"></div>

      <div class="flex flex-col gap-8 md:gap-12 w-full md:w-1/3 pt-2 md:pt-0">
        <div class="flex items-center gap-4 group" data-aos="fade-left" data-aos-delay="300">
          <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-md">
            <img src="/icon-bank.png" alt="Bank Account" class="w-8 h-8 object-contain" />
          </div>
          <div>
            <h3 class="text-lg font-bold text-[#0F172A] mb-1">Bank Account</h3>
            <p class="text-slate-500 text-xs md:text-sm leading-relaxed">Send money to or receive money from other users.</p>
          </div>
        </div>
        <div class="flex items-center gap-4 group" data-aos="fade-left" data-aos-delay="400">
          <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-md">
            <img src="/icon-transfer.png" alt="Bank Transfer" class="w-8 h-8 object-contain" />
          </div>
          <div>
            <h3 class="text-lg font-bold text-[#0F172A] mb-1">Bank Transfer</h3>
            <p class="text-slate-500 text-xs md:text-sm leading-relaxed">Easily withdraw money from any agent countrywide.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</div>
  

<div class="-mx-6 bg-cover bg-center bg-no-repeat text-white rounded-[18px] pt-16 pb-0 px-6 md:px-16 relative overflow-hidden mb-0" style="background-image: url('/footer-bg.png');" data-aos="fade-up">
  <div class="flex flex-col lg:flex-row items-end justify-between gap-8 h-full">
    <div class="lg:w-[55%] text-left z-30 pb-16" style="font-family: 'Helvetica Now Display', 'Helvetica Neue', Helvetica, Arial, sans-serif;">
      <h2 class="text-2xl md:text-4xl font-light text-white mb-8 leading-tight">
        Khusapay's technology enables governments to do more. Our teams are available to help, every step of the way.
      </h2>
      <button class="group flex items-center gap-4 bg-[#F89521] hover:bg-orange-600 text-white pl-8 pr-2 py-2 rounded-full font-bold transition-all duration-300 shadow-lg shadow-orange-500/20">
        <span>Talk to us today</span>
        <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 group-hover:scale-105">
          <ArrowUpRight class="w-6 h-6 text-[#F89521]" />
        </div>
      </button>
    </div>
    <div class="lg:w-[45%] relative h-[250px] md:h-[320px] w-full flex justify-center lg:justify-end z-0">
      <img src="/phone-small.png" alt="Large Phone" class="h-full w-auto object-contain object-bottom absolute bottom-0 right-[40px] md:right-[100px] z-10 drop-shadow-2xl" data-aos="fade-up" data-aos-delay="200" />
      <img src="/phone-large.png" alt="Small Phone" class="h-[70%] w-auto object-contain absolute right-4 md:right-12 bottom-8 md:bottom-12 z-20 drop-shadow-2xl rounded-[2rem]" data-aos="fade-up" data-aos-delay="400" />
    </div>
  </div>
</div>
      </div>
    </div>

    <footer class="w-full text-white py-12 md:py-20 bg-cover bg-center bg-no-repeat" style="background-image: url('/footer-bg.png');">
      <div class="max-w-[1078px] mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16 border-white/10">
          <div class="space-y-4">
            <h4 class="text-sm text-white font-medium opacity-90">Find us at</h4>
            <p class="font-bold text-white leading-tight uppercase">SHARMA ELECTRICAL CONTRACTING</p>
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
            <a href="#" class="transition hover:scale-105"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" class="h-10 md:h-12 w-auto" alt="Download on App Store"/></a>
             <a href="#" class="transition hover:scale-105"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" class="h-10 md:h-12 w-auto" alt="Get it on Google Play"/></a>
          </div>
        </div>
        <hr class="border-white/20 mb-8" />
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="flex items-center gap-2"><img src="/Frame.png" alt="Khusapay Logo" class="h-10 w-auto object-contain" /></div>
          <div class="text-xs text-gray-300 text-right">&copy; 2025 @khusapay. All Rights Reserved.</div>
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
    ArrowUpRight
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
    
      gradient: 'from-[#FFB800] to-[#F8367C]',
      customImage: '/card-icon-1.png',
      scale: 'scale-150'
    },
    {
      titlePart1: 'Payment',
      titlePart2: 'Aggregation',
      description: 'By enhancing collection of revenue and reducing leakages, Khusa Pay saves expenditure and ensures convenience.',
      icon: ArrowLeftRight,
      baseColor: 'pink',
      
      gradient: 'from-[#FFB800] to-[#F8367C]', 
      customImage: '/card-icon-2.png',
      scale: 'scale-125'
    },
    {
      titlePart1: 'Business',
      titlePart2: 'Intelligence',
      description: 'Receive and disburse funds through multiple channels without worrying about the overhead of managing separate accounts.',
      icon: LineChart,
      baseColor: 'orange',
      
      gradient: 'from-[#FFB800] to-[#F8367C]',
      customImage: '/card-icon-3.png',
      scale: 'scale-150'
    }
  ];
</script>

<style>

body {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>