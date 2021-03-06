import { writable } from "svelte/store";

export const resultDataStore = writable(0);           // Updated by SourceUI, consumed by ViewModelUI
export const statusTextStore = writable('');               // Feedback for SourceUI from data source components
export const graph = writable({nodes: [], links: []});// Updated by ViewModelUI, consumed by View
