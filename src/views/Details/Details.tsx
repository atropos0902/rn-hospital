import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { useHospital } from '../../hooks/useHospital';
import { Hospital } from '../../interfaces/Hospital';
import { imageMap } from '../../lib/constants';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { IconBack, IconTrash } from '../../assets/svg';
import styles from './styles';

const Details: React.FC = () => {
  const { params: { hospital } = {} } =
    useRoute<RouteProp<{ Prop?: { hospital: Hospital } }, 'Prop'>>();
  const navigation = useNavigation();
  const { onAdd, onUpdate, onRemove } = useHospital();

  const [state, setState] = useState<Hospital>(
    hospital || {
      hospital_id: new Date().getTime().toString(),
      name: '',
      image: `image${(Math.ceil(Math.random() * 100) % 3) + 1}`,
      street_address: '',
      city: '',
      state: '',
      zip_code: '',
    },
  );

  const handleBack = () => {
    navigation.goBack();
  };

  const handleRemove = () => {
    if (!hospital) {
      return;
    }

    onRemove(hospital.hospital_id);
    navigation.goBack();
  };

  const handleChange = (key: keyof Hospital, value: string) => {
    setState({ ...state, [key]: value });
  };

  const handleSubmit = () => {
    if (hospital) {
      onUpdate(state);
    } else {
      onAdd(state);
    }

    navigation.goBack();
  };

  const buttonText = hospital ? 'Update' : 'Add';

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <Image source={imageMap[state.image]} style={styles.image} />

      <TouchableOpacity style={styles.back} onPress={handleBack}>
        <IconBack width={45} height={45} />
      </TouchableOpacity>

      {hospital && (
        <TouchableOpacity style={styles.trash} onPress={handleRemove}>
          <IconTrash width={45} height={45} />
        </TouchableOpacity>
      )}

      <View style={styles.detailsContainer}>
        <Input
          label="Name"
          placeholder="Name"
          value={state.name}
          onChangeText={value => handleChange('name', value)}
        />
        <Input
          label="Street"
          placeholder="Street"
          value={state.street_address}
          onChangeText={value => handleChange('street_address', value)}
        />
        <Input
          label="City"
          placeholder="City"
          value={state.city}
          onChangeText={value => handleChange('city', value)}
        />
        <Input
          label="State"
          placeholder="State"
          value={state.state}
          onChangeText={value => handleChange('state', value)}
        />
        <Input
          label="Zip Code"
          placeholder="Zip Code"
          value={state.zip_code}
          onChangeText={value => handleChange('zip_code', value)}
        />

        <Button
          text={buttonText}
          disabled={!state.name}
          style={styles.actionButton}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default Details;
