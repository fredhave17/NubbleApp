import {useEffect, useState} from 'react';
import {Post} from '../postTypes';
import {postService} from '../postService';

export function usePostList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  async function fetchInitialData() {
    try {
      setLoading(true);
      const {data, meta} = await postService.getList(1);
      setPostList(data);
      if (meta.hasNextPage) {
        setPage(2);
      } else {
        setHasNextPage(false);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNextPage() {
    if (loading || !hasNextPage) {
      try {
        setLoading(true);
        const {data, meta} = await postService.getList(page);
        setPostList(prev => [...prev, ...data]);
        if (meta.hasNextPage) {
          setPage(prev => prev + 1);
        } else {
          setHasNextPage(false);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    fetchInitialData();
  }, []);

  return {
    postList,
    error,
    loading,
    refresh: fetchInitialData,
    fetchNextPage,
  };
}
