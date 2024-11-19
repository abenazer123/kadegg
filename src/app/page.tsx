'use client';

import React from 'react';
import { ArrowRight, Target, Coins, Trophy } from 'lucide-react';
import { Button } from '@/components/Button';
import { WaveGrid } from '@/components/WaveGrid';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0">
        <WaveGrid />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          {/* Navigation */}
          <nav className="flex justify-between items-center mb-8 md:mb-16">
            <div className="flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="6" height="6" fill="white"/>
                <rect x="18" y="8" width="6" height="6" fill="white" fillOpacity="0.5"/>
                <rect x="8" y="18" width="6" height="6" fill="white" fillOpacity="0.5"/>
              </svg>
              <span className="text-[#FFF68F] text-2xl md:text-3xl">kade</span>
            </div>
            <Button variant="secondary">
              Join Beta
            </Button>
          </nav>

          {/* Hero Section */}
          <div className="max-w-3xl mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              The Arcade Where <span className="text-[#FFF68F]">Skill Pays</span>
            </h1>
            <p className="text-lg md:text-xl text-[#D3D3D3]">
              Skill-based games. Real crypto stakes. No luck, just pure competition.
            </p>
          </div>

          {/* Featured Game Section - with transparent gradient */}
          <div className="rounded-2xl border border-[#222222]/50">
            {/* Create a separate transparent top section */}
            <div className="p-6 md:p-12 space-y-4 max-w-3xl">
              <div className="inline-block">
                <div className="bg-black/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#333333]/50">
                  <span className="text-[#FFF68F] text-sm">Featured Game</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h2 className="text-5xl md:text-7xl">
                  <span className="text-[#FFF68F]">Karnage</span>
                  <span className="text-white/50 ml-2 md:ml-4">Beta</span>
                </h2>
                <p className="text-lg md:text-2xl text-[#D3D3D3]">Eat or be eaten</p>
              </div>
            </div>

            {/* Content section with gradient background */}
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black/80 p-6 md:p-12 pt-0">
              {/* Game Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-[#222222]/50">
                    <div className="flex items-start gap-4">
                      <Coins className="h-6 w-6 text-[#FFF68F]" />
                      <div>
                        <h3 className="text-[#FFF68F] font-medium mb-1 md:mb-2">Buy into Games</h3>
                        <p className="text-sm md:text-base text-[#D3D3D3]">
                          Buy into games with any amount - the more you stake, the bigger you start
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-[#222222]/50">
                    <div className="flex items-start gap-4">
                      <Target className="h-6 w-6 text-[#FFF68F]" />
                      <div>
                        <h3 className="text-[#FFF68F] font-medium mb-1 md:mb-2">Hunt & Absorb</h3>
                        <p className="text-sm md:text-base text-[#D3D3D3]">
                          Hunt and eat smaller players to collect their stakes
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-[#222222]/50">
                    <div className="flex items-start gap-4">
                      <Trophy className="h-6 w-6 text-[#FFF68F]" />
                      <div>
                        <h3 className="text-[#FFF68F] font-medium mb-1 md:mb-2">Collect & Cash Out</h3>
                        <p className="text-sm md:text-base text-[#D3D3D3]">
                          Cash out your winnings in any token or memecoin
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button variant="primary" size="lg" className="w-full md:w-auto">
                      Play Karnage Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Game Preview */}
                <div className="relative order-first md:order-last">
                  <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm border border-[#222222]/50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#FFF68F]/10 mb-4">
                          <div className="w-6 h-6 md:w-8 md:h-8 bg-[#FFF68F]/20 rounded-full animate-pulse" />
                        </div>
                        <p className="text-sm md:text-base text-[#666666]">Game Demo Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
