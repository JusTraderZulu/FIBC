'use client';

import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";
import { motion } from "framer-motion";

export type PageHeaderProps = {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
  className?: string;
  icon?: string;
};

export function PageHeader({ 
  title, 
  description, 
  breadcrumbs, 
  children, 
  className = "",
  icon = "🏛️"
}: PageHeaderProps) {
  return (
    <div className={`border-b border-black/5 bg-gradient-to-b from-[hsl(var(--brand))]/5 to-transparent ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {breadcrumbs && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Breadcrumb items={breadcrumbs} className="mb-4" />
          </motion.div>
        )}
        
        <div className="text-center space-y-6">
          {/* Animated Icon Circle */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(var(--brand))] to-[hsl(var(--brand))]/80 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">{icon}</span>
            </div>
          </motion.div>
          
          <div className="space-y-4">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[hsl(var(--ink))] drop-shadow-sm bg-gradient-to-b from-[hsl(var(--ink))] to-[hsl(var(--brand))] bg-clip-text text-transparent font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {title}
            </motion.h1>
            
            {description && (
              <motion.p 
                className="text-xl text-black/70 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {description}
              </motion.p>
            )}
            
            {/* Animated Accent line divider */}
            <motion.div 
              className="w-16 h-1 bg-[hsl(var(--accent))] mx-auto rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 64, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
          </div>
          
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
