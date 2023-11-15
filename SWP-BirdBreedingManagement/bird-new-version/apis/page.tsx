"use client";
import {
  Bird,
  Bird_reproduction,
  Cage,
  DashBoard,
  Reproduction_process,
  Staff,
} from "@/type";
import axios from "axios";

const BASE_URL = "https://bird-swp.azurewebsites.net/api";

// DASHBOARD
export async function fetchDataInDashBoard(): Promise<DashBoard> {
  const res = await axios.get(`https://bird-swp.azurewebsites.net/`);
  return res.data;
}

// BIRD
export async function fetchBirds(): Promise<Bird[]> {
  const res = await axios.get(`${BASE_URL}/birds/view`);
  return res.data;
}

export async function fetchBirdById(birdId: string): Promise<Bird> {
  const res = await axios.get(`${BASE_URL}/birds/view/${birdId}`);
  return res.data;
}

//USER
export async function fetchUsers(): Promise<Staff[]> {
  const res = await axios.get(`${BASE_URL}/users/view`);
  return res.data;
}

//CAGE

export async function fetchCages(): Promise<Cage[]> {
  const res = await axios.get(`${BASE_URL}/cages/view`);
  return res.data;
}
// ***** TO DO LATE
export async function fetchCageById(cageId: string): Promise<Cage> {
  const res = await axios.get(`${BASE_URL}/cages/view/${cageId}`);
  return res.data;
}

//process
export async function fetchProces(): Promise<Reproduction_process[]> {
  const res = await axios.get(
    `https://bird-swp.azurewebsites.net/api/reproductionprocess/all`
  );
  return res.data;
}

export async function fetchProcessById(
  processId: string
): Promise<Reproduction_process> {
  const res = await axios.get(
    `${BASE_URL}/reproductionprocess/view/${processId}`
  );
  return res.data;
}
