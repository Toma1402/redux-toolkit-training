import { statusFilters } from './constants';
import { createSelector } from '@reduxjs/toolkit';
export const getTasks = state => state.tasks.items;
export const getStatusFilter = state => state.filters.status;
export const getError = state => state.tasks.getError;
export const getIsLoading = state => state.tasks.isLoading;

export const selectVisibleTasks = createSelector(
  [getTasks, getStatusFilter],
  (tasks, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(task => !task.completed);
      case statusFilters.completed:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }
);
export const selectTaskCount = createSelector([getTasks], tasks => {
  console.log('Calculating task count, memoized');

  return tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
});
