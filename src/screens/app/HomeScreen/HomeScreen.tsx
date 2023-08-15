import React, {useEffect, useState} from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {AppTabScreenProps} from '../../../routes/navigationType';
import {postService} from '../../../domain/Post/postService';
import {Post} from '../../../domain/Post/postTypes';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Box} from '../../../components/Box/Box';
import {PostItem} from '../../../components/PostItem/Postitem';
import {HomeHeader} from '../../../components/PostItem/components/HomeHeader';
import {HomeEmpty} from './HomeEmpty';
import {usePostList} from '../../../domain/Post/useCases/usePostList';
import {useScrollToTop} from '@react-navigation/native';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const {error, refresh, postList, loading, fetchNextPage} = usePostList();

  const flatListRef = React.useRef<FlatList<Post>>(null);
  useScrollToTop(flatListRef);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        data={postList}
        ref={flatListRef}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
        refreshing={loading}
        ListHeaderComponent={<HomeHeader />}
        contentContainerStyle={{flex: postList.length === 0 ? 1 : undefined}}
        ListEmptyComponent={
          <HomeEmpty loading={loading} error={error} refetch={refresh} />
        }
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  flex: 1,
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
