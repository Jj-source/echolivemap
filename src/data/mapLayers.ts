import type { MapLayer } from '../types';

export const mapLayers: Record<string, MapLayer> = {
  classic: {
    name: "Classic",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  },
  openCycleMap: {
    name: "OpenCycleMap",
    url: "https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=0bc3d96aa0824e42a35d94a9a7b610bc",
    attribution: 'Maps &copy; <a href="https://www.thunderforest.com/">Thunderforest</a>, Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 20
  },
  transport: {
    name: "Transport",
    url: "https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=0bc3d96aa0824e42a35d94a9a7b610bc",
    attribution: 'Maps &copy; <a href="https://www.thunderforest.com/">Thunderforest</a>, Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 20
  },
  landscape: {
    name: "Landscape",
    url: "https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=0bc3d96aa0824e42a35d94a9a7b610bc",
    attribution: 'Maps &copy; <a href="https://www.thunderforest.com/">Thunderforest</a>, Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 20
  },
  outdoors: {
    name: "Outdoors",
    url: "https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=0bc3d96aa0824e42a35d94a9a7b610bc",
    attribution: 'Maps &copy; <a href="https://www.thunderforest.com/">Thunderforest</a>, Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 20
  },
  transportDark: {
    name: "Transport Dark",
    url: "https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=0bc3d96aa0824e42a35d94a9a7b610bc",
    attribution: 'Maps &copy; <a href="https://www.thunderforest.com/">Thunderforest</a>, Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 20
  },
  spinalMap: {
    name: "Spinal Map",
    url: "https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=0bc3d96aa0824e42a35d94a9a7b610bc",
    attribution: 'Maps &copy; <a href="https://www.thunderforest.com/">Thunderforest</a>, Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 20
  },
  pioneer: {
    name: "Pioneer",
    url: "https://tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=0bc3d96aa0824e42a35d94a9a7b610bc",
    attribution: 'Maps &copy; <a href="https://www.thunderforest.com/">Thunderforest</a>, Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 20
  },
  mobileAtlas: {
    name: "Mobile Atlas",
    url: "https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=0bc3d96aa0824e42a35d94a9a7b610bc",
    attribution: 'Maps &copy; <a href="https://www.thunderforest.com/">Thunderforest</a>, Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 20
  },
  neighbourhood: {
    name: "Neighbourhood",
    url: "https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=0bc3d96aa0824e42a35d94a9a7b610bc",
    attribution: 'Maps &copy; <a href="https://www.thunderforest.com/">Thunderforest</a>, Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 20
  },
  atlas: {
    name: "Atlas",
    url: "https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=0bc3d96aa0824e42a35d94a9a7b610bc",
    attribution: 'Maps &copy; <a href="https://www.thunderforest.com/">Thunderforest</a>, Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 20
  }
};