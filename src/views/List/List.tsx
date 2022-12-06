import React from 'react';
import { FlatList, ListRenderItem, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useHospital } from '../../hooks/useHospital';
import { Hospital } from '../../interfaces/Hospital';
import { IconPlus } from '../../assets/svg';
import Card from './components/Card';
import SkeletonCard from './components/SkeletonCard';
import styles from './styles';
import { RefreshControl } from 'react-native-gesture-handler';

const List: React.FC = () => {
  const navigation = useNavigation();
  const { hospitals, loading, onFetch } = useHospital();

  const renderItem: ListRenderItem<Hospital> = ({ item }) => <Card hospital={item} />;

  const handlePressAdd = () => {
    navigation.navigate('Details' as never);
  };

  let listNode: React.ReactNode = (
    <View style={styles.skeleton}>
      {Array.from({ length: 20 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </View>
  );

  if (hospitals.length > 0) {
    listNode = (
      <FlatList<Hospital>
        data={hospitals}
        style={styles.list}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.hospital_id}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={onFetch} />}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hospitals</Text>
        <TouchableOpacity onPress={handlePressAdd}>
          <IconPlus width={45} height={45} />
        </TouchableOpacity>
      </View>

      {listNode}
    </View>
  );
};

export default List;
