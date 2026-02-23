import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface ExpertiseItem {
  title: string;
  description: string;
  image: string;
}

export interface RegionItem {
  name: string;
  code: string;
  description: string;
}

export interface JDRequest {
  title: string;
  level: string;
  location: string;
  skills: string;
}