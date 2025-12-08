<template>
  <div class="min-h-screen font-sans text-white bg-cover bg-center bg-no-repeat bg-fixed" style="background-image: url('/background.png');">
    
    <nav class="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
      <div class="flex items-center gap-2">
        <div class="relative w-8 h-8">
            <div class="absolute inset-0 bg-white transform rotate-45 rounded sm:rounded-md"></div>
            <div class="absolute inset-0 bg-orange-500 transform rotate-45 rounded sm:rounded-md scale-50"></div>
        </div>
        <span class="text-2xl font-bold tracking-wide">Khusapay</span>
      </div>

      <div class="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
        <a href="#" class="hover:text-white transition">Home</a>
        <a href="#" class="hover:text-white transition">Solutions</a>
        <a href="#" class="hover:text-white transition">Company</a>
      </div>

      <div class="flex items-center gap-4">
        <button class="px-8 py-2.5 bg-orange-500 hover:bg-orange-600 rounded-full text-sm font-bold transition shadow-lg shadow-orange-500/20">
          Sign up
        </button>
        <button class="px-8 py-2.5 border border-white/20 hover:bg-white/10 rounded-full text-sm font-bold transition">
          Sign in
        </button>
      </div>
    </nav>

    <main class="px-6 pt-20 pb-24 max-w-7xl mx-auto text-center">
      
      <h1 class="text-[50px] md:text-[86px] font-light leading-[1.06] tracking-[-0.2px] mb-8 drop-shadow-lg">
        The Ultimate <span class="text-[#F89521]">Payment &</span> <br />
        <span class="text-[#F89521]">Settlement Platform</span>
      </h1>

      <div class="flex flex-wrap justify-center items-center gap-4 mb-10">
        <span class="text-gray-400 text-sm font-medium mr-2">for</span>
        
        <span class="px-4 py-1.5 bg-white/5 rounded-full text-xs font-semibold text-orange-100 border border-orange-500/30 uppercase tracking-wide">
          Government
        </span>
        <span class="px-4 py-1.5 bg-white/5 rounded-full text-xs font-semibold text-orange-100 border border-orange-500/30 uppercase tracking-wide">
          Merchants
        </span>
        <span class="px-4 py-1.5 bg-white/5 rounded-full text-xs font-semibold text-orange-100 border border-orange-500/30 uppercase tracking-wide">
          Consumers
        </span>
        <span class="px-4 py-1.5 bg-white/5 rounded-full text-xs font-semibold text-orange-100 border border-orange-500/30 uppercase tracking-wide flex items-center gap-2">
          Corporates <span class="w-2 h-2 rounded-full bg-orange-500"></span>
        </span>
      </div>

      <p class="text-gray-300 max-w-2xl mx-auto mb-20 text-lg leading-relaxed font-light">
        Focus less on chasing payments and spend more time <br class="hidden md:block"/>
        growing your Business and planning for the future.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
        
        <div class="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition duration-300 group text-left relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
          
          <div class="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition relative">
             <div class="absolute inset-0 rounded-full bg-orange-500/20 blur-xl"></div>
             <LayoutDashboard class="text-orange-400 w-8 h-8 relative z-10" />
          </div>
          <h3 class="text-3xl font-bold mb-2">Revenue <br/> <span class="text-orange-400">Collections</span></h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Khusapay is a merchant-centric, fintech powered settlement engine that offers the complete power of a bank to any establishment.
          </p>
        </div>

        <div class="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition duration-300 group text-left relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

          <div class="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition relative">
             <div class="absolute inset-0 rounded-full bg-pink-500/20 blur-xl"></div>
             <ArrowLeftRight class="text-pink-400 w-8 h-8 relative z-10" />
          </div>
          <h3 class="text-3xl font-bold mb-2">Payment <br/> <span class="text-pink-400">Aggregation</span></h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            By enhancing collection of revenue and reducing leakages, Khusa Pay saves expenditure and ensures convenience.
          </p>
        </div>

        <div class="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition duration-300 group text-left relative overflow-hidden">
           <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

          <div class="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition relative">
             <div class="absolute inset-0 rounded-full bg-blue-500/20 blur-xl"></div>
             <LineChart class="text-blue-400 w-8 h-8 relative z-10" />
          </div>
          <h3 class="text-3xl font-bold mb-2">Business <br/> <span class="text-blue-400">Intelligence</span></h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Receive and disburse funds through multiple channels without worrying about the overhead of managing separate accounts.
          </p>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
  import { LayoutDashboard, ArrowLeftRight, LineChart } from 'lucide-vue-next';
</script>

<style>
/* Font fix for clean rendering */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>