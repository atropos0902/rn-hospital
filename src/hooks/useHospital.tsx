import React, { PropsWithChildren, useEffect, useState } from 'react';

import { Hospital } from '../interfaces/Hospital';
import { BASE_URL } from '../lib/constants';

type HospitalContextType = {
  hospitals: Hospital[];
  loading: boolean;
  onFetch: () => void;
  onAdd: (hospital: Hospital) => void;
  onUpdate: (hospital: Hospital) => void;
  onRemove: (id: string) => void;
};

const HospitalContext = React.createContext<HospitalContextType | null>(null);

export const HospitalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  useEffect(() => {
    onFetch();
  }, []);

  const onFetch = () => {
    setLoading(true);

    fetch(BASE_URL)
      .then(res => res.json())
      .then((res: Omit<Hospital, 'image'>[]) => {
        setLoading(false);
        setHospitals(res.map((h, index) => ({ ...h, image: `image${(index % 3) + 1}` })));
      });
  };

  const onAdd = (hospital: Hospital) => {
    setHospitals([hospital, ...hospitals]);
  };

  const onUpdate = (hospital: Hospital) => {
    const index = hospitals.findIndex(h => h.hospital_id === hospital.hospital_id);
    hospitals[index] = { ...hospital };

    setHospitals([...hospitals]);
  };

  const onRemove = (id: string) => {
    const index = hospitals.findIndex(h => h.hospital_id === id);
    hospitals.splice(index, 1);

    setHospitals([...hospitals]);
  };

  return (
    <HospitalContext.Provider value={{ hospitals, loading, onFetch, onAdd, onUpdate, onRemove }}>
      {children}
    </HospitalContext.Provider>
  );
};

export const useHospital = () => {
  return React.useContext(HospitalContext) as HospitalContextType;
};
