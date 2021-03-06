import { createSelector } from 'reselect';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter),
  );
    })
