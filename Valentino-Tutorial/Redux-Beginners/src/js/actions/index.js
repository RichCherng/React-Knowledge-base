// src/js/actions/index.js

import { ADD_ARTICLE } from '../constants/action-types';

export const addArticle = article => ({ type: "ADD_ARTICLE", payload: article });