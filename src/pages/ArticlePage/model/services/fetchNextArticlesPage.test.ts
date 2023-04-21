import { TestAsyncThunk } from 'shared/lib/tests/ComponentRender/TestAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticlesPageList } from './articlesPageList';

jest.mock('./articlesPageList');

describe('fetchNextArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlePage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesPageList).toHaveBeenCalledWith({ page: 3 });
    });
    test('fetchAritcleList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlePage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesPageList).not.toHaveBeenCalled();
    });
});
