import { useQuery } from '@tanstack/react-query';
import { fetchTemperature, fetchCO2, fetchMethane, fetchN2O, fetchPolarIce } from '../api/globalWarming';

export const useTemperature = () =>
  // useQuery esegue il fetch una volta sola, salva in cache e riusa i dati.
  useQuery({
    queryKey: ['temperature'],
    queryFn: fetchTemperature,
    staleTime: 1000 * 60 * 10, // 10 min
  });

export const useCO2 = () =>
  useQuery({
    queryKey: ['co2'],
    queryFn: fetchCO2,
    staleTime: 1000 * 60 * 10,
  });

export const useMethane = () =>
  useQuery({
    queryKey: ['methane'],
    queryFn: fetchMethane,
    staleTime: 1000 * 60 * 10,
  });

  export const useN2O = () =>
  useQuery({
    queryKey: ['n2o'],
    queryFn: fetchN2O,
    staleTime: 1000 * 60 * 10,
  });
  
  export const usePolarIce = () =>
  useQuery({
    queryKey: ['polarIce'],
    queryFn: fetchPolarIce,
    staleTime: 1000 * 60 * 10,
  });
