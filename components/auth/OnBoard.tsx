import React, { useState } from 'react';
import { View } from '../Themed';
import { Button, ProgressBar, Text } from 'react-native-paper';
import { StyleSheet, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { router } from 'expo-router';

export const OnBoard = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const screenPadding = 40;
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const content = [
    {
      title: 'Discover\nChore Champions',
      description:
        'Learn investing by completing chores. As your pet thrives, so do your finances.',
      img: 'https://i.pinimg.com/originals/ab/72/9c/ab729cfa4cdd607137fba116372ad5c1.jpg',
    },
    {
      title: 'Earn Points,\nLevel Up!',
      description:
        'Your pet tracks all savings to help visualise the power of investing over time.',
      img: 'https://i.pinimg.com/originals/ab/72/9c/ab729cfa4cdd607137fba116372ad5c1.jpg',
    },
    {
      title: 'Track and\nEarn Achievements',
      description: 'Work towards different achievements or create your own!',
      img: 'https://i.pinimg.com/originals/ab/72/9c/ab729cfa4cdd607137fba116372ad5c1.jpg',
    },
  ];

  return (
    <View style={styles.screenContainer}>
      <View>
        <Carousel
          style={{ height: 500 }}
          width={width - screenPadding}
          scrollAnimationDuration={500}
          loop={false}
          data={content}
          onSnapToItem={(index) => setCarouselIndex(index + 1)}
          renderItem={({ item }) => (
            <View>
              <Image
                source={{ uri: item.img }}
                style={{
                  width: width - screenPadding,
                  height: width - screenPadding,
                }}
              />
              <Text
                variant="headlineMedium"
                style={{ fontWeight: '700', marginVertical: 8 }}
              >
                {item.title}
              </Text>
              <Text variant="bodyMedium">{item.description}</Text>
            </View>
          )}
        />
        <ProgressBar progress={carouselIndex / content.length} />
      </View>

      <View style={{ gap: 10 }}>
        <Button
          style={{ paddingVertical: 5, borderRadius: 30 }}
          mode="contained"
          icon="login"
          onPress={() => router.push('/login')}
        >
          Continue with E-mail
        </Button>
        <View style={{ flexDirection: 'row', gap: 10, marginBottom: 40 }}>
          <Button
            labelStyle={{ fontSize: 13 }}
            mode="contained"
            style={styles.socialLoginButton}
            icon="apple"
          >
            Apple
          </Button>
          <Button
            labelStyle={{ fontSize: 13 }}
            mode="contained"
            style={styles.socialLoginButton}
            icon="google"
          >
            Google
          </Button>
          <Button
            labelStyle={{ fontSize: 13 }}
            mode="contained"
            style={styles.socialLoginButton}
            icon="facebook"
          >
            Facebook
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  socialLoginButton: {
    flex: 1,
    fontSize: 10,
  },
});
