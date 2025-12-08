<template>
  <div class="font-sans overflow-x-hidden">
    
    <div class="text-white bg-cover bg-center bg-no-repeat relative" style="background-image: url('/background.png');">
      
      <nav class="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto relative z-10" data-aos="fade-down">
        <div class="flex items-center gap-2">
          <div class="relative w-8 h-8">
              <div class="absolute inset-0 bg-white transform rotate-45 rounded sm:rounded-md"></div>
              <div class="absolute inset-0 bg-orange-500 transform rotate-45 rounded sm:rounded-md scale-50"></div>
          </div>
          
          <span class="text-2xl font-bold tracking-wide text-white">
            Khusa<span class="text-[#F89521]">pay</span>
          </span>
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
        
        <h1 class="text-[50px] md:text-[86px] font-light leading-[1.06] tracking-[-0.2px] drop-shadow-lg flex flex-col items-center gap-[27px] max-w-[980px] w-full" data-aos="zoom-in" data-aos-duration="1000">
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
    
    <div class="bg-white text-slate-800 pt-32 pb-32">
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
            <h3 class="text-[#F97316] text-xl font-medium mb-2">Merchant <br/> Sector Solutions</h3>
            <p class="text-gray-500 leading-relaxed">
              Khusapay is a merchant-centric, fintech powered settlement engine that offers the complete power of a bank to any establishment.
            </p>
          </div>

          <div class="relative z-10" data-aos="fade-left">
            <div class="w-[350px] h-[350px] rounded-full overflow-hidden border-4 border-white shadow-2xl relative bg-gray-100">
               <img src="/merchant-person.png" alt="Merchant" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div class="w-full flex flex-col md:flex-row-reverse items-center justify-center gap-10 min-h-[400px] mb-20">
          <div class="max-w-md text-left" data-aos="fade-left">
            <h3 class="text-[#F97316] text-xl font-medium mb-2">Government & public <br/> Sector Solutions</h3>
            <p class="text-gray-500 leading-relaxed">
              By enhancing collection of revenue and reducing leakages, Khusa Pay saves expenditure and ensures convenience.
            </p>
          </div>

          <div class="relative" data-aos="fade-right">
            <div class="w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gray-100">
               <img src="/government-person.png" alt="Government" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div class="w-full flex flex-col md:flex-row items-center justify-center gap-10 min-h-[600px]">
          <div class="max-w-md text-left" data-aos="fade-right">
            <h3 class="text-[#F97316] text-xl font-medium mb-2">Consumer <br/> Sector Solutions</h3>
            <p class="text-gray-500 leading-relaxed">
              Receive and disburse funds through multiple channels without worrying about the overhead of managing separate float accounts.
            </p>
          </div>

          <div class="relative" data-aos="fade-left">
            <div class="w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gray-100">
               <img src="/consumer-person.png" alt="Consumer" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

            
        <div class="flex flex-col md:flex-row justify-center items-center gap-8 mb-40 mt-32">
          <div data-aos="zoom-in-up" class="bg-white rounded-[40px] p-8 max-w-sm shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl transition duration-500 text-center group border border-gray-50 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition duration-700"></div>
            
            <div class="w-[300px] h-[300px] mx-auto mb-8 relative flex items-center justify-center">
              <div class="absolute inset-0 bg-orange-50 rounded-full scale-0 group-hover:scale-100 transition duration-500"></div>
              <img src="/icon-coin-new.png" alt="Governments" class="w-[280px] h-[280px] object-contain relative z-10 drop-shadow-lg" />
            </div>

            <div class="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-6">Key Clients</div>

            <h3 class="text-3xl font-bold mb-6 text-slate-900">Governments <br/> <span class="text-orange-500">& Public Sector</span></h3>
            
            <p class="text-gray-500 leading-relaxed mb-0 px-4">
              Governments can spur thriving economies by offering convenient access to public services and utilities.
            </p>
          </div>

          <div data-aos="zoom-in-up" data-aos-delay="200" class="bg-white rounded-[40px] p-8 max-w-sm shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl transition duration-500 text-center group border border-gray-50 relative overflow-hidden">
             <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition duration-700"></div>

            <div class="w-[300px] h-[300px] mx-auto mb-8 relative flex items-center justify-center">
               <div class="absolute inset-0 bg-teal-50 rounded-full scale-0 group-hover:scale-100 transition duration-500"></div>
              <img src="/icon-coin-new.png" alt="Merchants" class="w-[280px] h-[280px] object-contain relative z-10 drop-shadow-lg" />
            </div>

             <div class="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-600 text-xs font-bold uppercase tracking-wider mb-6">Key Clients</div>

            <h3 class="text-3xl font-bold mb-6 text-teal-600">Merchants</h3>
            
            <p class="text-gray-500 leading-relaxed mb-0 px-4">
              From corporations to businesses, Khusa Pay tracks all financial movements through virtual accounts.
            </p>
          </div>
        </div>


        <div class="bg-[#FFFBF5] rounded-[40px] py-24 px-10 mb-40">
          
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
                With Khusapay you will experience a simple, fast and efficient payment system again, again and again. Your transactions are fully protected against fraud and you can have peace of mind that your transactions are secure. You can keep track of your transactions via a state-of-the-art reporting system.
              </p>
            </div>

          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            
            <div data-aos="fade-up" data-aos-delay="0" class="group">
              <div class="mb-8 transform group-hover:-translate-y-2 transition duration-300">
                <img src="/icon-3d-cube.png" class="w-16 h-16 drop-shadow-xl" alt="icon"/>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-4">
                Complete Payment <br/> Transparency
              </h3>
              <p class="text-gray-500 text-sm leading-relaxed">
                Khusapay enables real-time settlements and reconciliations by enabling payments to various parties through virtual accounts.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" class="group">
              <div class="mb-8 transform group-hover:-translate-y-2 transition duration-300">
                <img src="/icon-3d-cube.png" class="w-16 h-16 drop-shadow-xl" alt="icon"/>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-4">
                Global Visibility & <br/> Tighter Controls
              </h3>
              <p class="text-gray-500 text-sm leading-relaxed">
                With complete control to track and manage settlements, Khusapay offers comprehensive reporting and management all in one.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" class="group">
              <div class="mb-8 transform group-hover:-translate-y-2 transition duration-300">
                <img src="/icon-3d-cube.png" class="w-16 h-16 drop-shadow-xl" alt="icon"/>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-4">
                Actionable Financial <br/> Information
              </h3>
              <p class="text-gray-500 text-sm leading-relaxed">
                Khusapay provides data and gives analytics that give insights on trends specific to services or customers.
              </p>
            </div>

          </div>
        </div>

        <div class="w-full mb-40"> <div class="mb-8 ml-4 md:ml-0" data-aos="fade-right">
                <span class="text-orange-400 font-bold text-xs md:text-sm tracking-[0.2em] uppercase">Multi Channel Payments</span>
            </div>

            <div class="bg-[#F0F6FF] rounded-[40px] py-12 px-6 md:px-16 relative">
              
              <div class="flex flex-col lg:flex-row items-center justify-between gap-10">
                
                <div class="flex flex-col gap-10 lg:w-1/3 z-10">
                  <div class="flex items-center gap-5 group">
                    <div class="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0 transition-transform group-hover:scale-110">
                      <CreditCard class="w-7 h-7" />
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-slate-800 mb-1">Credit/Debit Cards</h3>
                      <p class="text-slate-500 text-sm leading-relaxed">Promptly send money to friends and pay bills on time.</p>
                    </div>
                  </div>

                  <div class="flex items-center gap-5 group">
                    <div class="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 shrink-0 transition-transform group-hover:scale-110">
                      <Smartphone class="w-7 h-7" />
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
                    <div class="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 transition-transform group-hover:scale-110">
                      <Landmark class="w-7 h-7" />
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-slate-800 mb-1">Bank Account</h3>
                      <p class="text-slate-500 text-sm leading-relaxed">Send money to or receive money from other users.</p>
                    </div>
                  </div>

                  <div class="flex items-center gap-5 group">
                    <div class="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 shrink-0 transition-transform group-hover:scale-110">
                      <ArrowLeftRight class="w-7 h-7" />
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
        <div data-aos="flip-up" class="bg-[#0F172A] rounded-[40px] p-0 md:pl-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
           <div class="relative z-10 max-w-xl py-20 px-10 md:px-0 text-left">
             <h2 class="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
               Khusapay’s technology enables governments to <span class="text-teal-400">do more</span>.
             </h2>
             <p class="text-gray-400 mb-10 text-lg">
               Our teams are available to help, every step of the way.
             </p>
             <button class="bg-[#F89521] hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition flex items-center gap-2 shadow-lg shadow-orange-500/20 group">
               Talk to us today <ArrowUpRight class="w-5 h-5 group-hover:rotate-45 transition duration-300" />
             </button>
           </div>
           
           <div class="relative md:w-1/2 h-[500px] flex items-end justify-end">
             <img src="/phone-cta.png" alt="Khusapay App" class="h-full object-contain object-bottom translate-y-10 translate-x-10" />
           </div>
        </div>

      </div>
    </div>

    <footer class="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div class="max-w-[1078px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div class="flex items-center gap-2 mb-6">
            <div class="w-6 h-6 bg-orange-500 rounded sm:rounded-md transform rotate-45"></div>
            <span class="text-xl font-bold text-white tracking-wide">Khusapay</span>
          </div>
          <p class="text-sm leading-relaxed">
            Empowering businesses with seamless, secure, and efficient payment solutions in the digital age.
          </p>
        </div>
        
        <div>
          <h4 class="text-white font-bold mb-6">Company</h4>
          <ul class="space-y-4 text-sm">
            <li><a href="#" class="hover:text-orange-500 transition">About Us</a></li>
            <li><a href="#" class="hover:text-orange-500 transition">Careers</a></li>
            <li><a href="#" class="hover:text-orange-500 transition">Blog</a></li>
            <li><a href="#" class="hover:text-orange-500 transition">Press</a></li>
          </ul>
        </div>

         <div>
          <h4 class="text-white font-bold mb-6">Resources</h4>
          <ul class="space-y-4 text-sm">
            <li><a href="#" class="hover:text-orange-500 transition">Documentation</a></li>
            <li><a href="#" class="hover:text-orange-500 transition">Help Center</a></li>
            <li><a href="#" class="hover:text-orange-500 transition">API Status</a></li>
            <li><a href="#" class="hover:text-orange-500 transition">Security</a></li>
          </ul>
        </div>

         <div>
          <h4 class="text-white font-bold mb-6">Legal</h4>
          <ul class="space-y-4 text-sm">
            <li><a href="#" class="hover:text-orange-500 transition">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-orange-500 transition">Terms of Service</a></li>
            <li><a href="#" class="hover:text-orange-500 transition">Cookie Policy</a></li>
            <li><a href="#" class="hover:text-orange-500 transition">Compliance</a></li>
          </ul>
        </div>
      </div>
      <div class="text-center mt-16 text-xs text-slate-600">
        &copy; 2024 Khusapay Inc. All rights reserved.
      </div>
    </footer>

  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  
  // AOS
  import AOS from 'aos';
  import 'aos/dist/aos.css';

  // Icons
  import { 
    LayoutDashboard, ArrowLeftRight, LineChart, ChevronRight, 
    CreditCard, Landmark, ArrowUpRight, Smartphone 
  } from 'lucide-vue-next';

  const categories = ['Government', 'Merchants', 'Consumers', 'Corporates'];

  // Initialize AOS
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