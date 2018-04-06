import * as actionTypes from '../actions/actionTypes';

const initialState = {
    allArticles: [],
    singleArticle: null,
    newArticleSubmitted: false,
    errorSubmittingNewArticle: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_ARTICLES:
            return {
                ...state,
                allArticles: action.articles
            };
        case actionTypes.GET_SINGLE_ARTICLE:
            return {
                ...state,
                singleArticle: action.article
            }
        case actionTypes.NEW_ARTICLE_SUBMITTED:
            return {
                ...state,
                newArticleSubmitted: true,
                errorsOnSubmittingNewArticle: null
            }
        case actionTypes.ERROR_SUBMITTING_ARTICLE:
            return {
                ...state,
                newArticleSubmitted: false,
                errorSubmittingNewArticle: action.error
            }
        default:
            return state;
    }
};

export default reducer;
