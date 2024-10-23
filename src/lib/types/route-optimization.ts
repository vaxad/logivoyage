import { LatLngTuple } from "leaflet";
import { Dispatch, SetStateAction } from "react";

export enum Status {
  READY = "ready",
  PENDING = "pending",
  COMPLETED = "completed",
}

export enum Optimization {
  FASTEST = "fastest",
  SHORTEST = "shortest",
  CHEAPEST = "cheapest",
}

export interface WeatherData {
  weather: string;
  chances: number;
}
export interface RouteOptimizationCard {
  title: string;
  id: string;
  status: Status;
  weatherData: WeatherData[];
  journey: {
    from: string;
    via?: string[];
    to: string;
    progress: number;
    route: LatLngTuple[];
    viaRoute?: LatLngTuple[];
  };
  vehicle: {
    company: string;
    model: string;
    space: number;
    volume: number;
    weight: number;
  };
  order: {
    title: string;
    quantity: number;
    weight: number;
    volume: number;
    payment: string;
  };
  history: {
    id: string;
    status: string;
    method: string;
    amount: number;
  }[];
  checkpoints: {
    title: string;
    progress: number;
    date: string;
  }[];
  price: number;
}

export interface RouteOptimizationSidebarProps {
  data: RouteOptimizationCard[];
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}

export interface RouteOptimizationMapProps {
  data: RouteOptimizationCard[];
  active: number;
}

export interface RouteOptimizationCardProps extends RouteOptimizationCard {
  handleClick: () => void;
  isActive: boolean;
}

export interface MapProps {
  card: RouteOptimizationCard;
}
