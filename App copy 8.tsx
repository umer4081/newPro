import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  // ----------------------------
  // 1. Create a dummy array of 50 items
  // ----------------------------
  const dummyData = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
  }));

  // ----------------------------
  // 2. Pagination states
  // ----------------------------
  const [page, setPage] = useState(1);        // current page
  const [dataPerPage] = useState(10);        // items per page
  const [displayData, setDisplayData] = useState(
    dummyData.slice(0, dataPerPage)
  ); // initial data to display

  // ----------------------------
  // 3. Load more function
  // ----------------------------
  const loadMore = () => {
    const nextPage = page + 1; // increment page
    const start = (nextPage - 1) * dataPerPage; // start index for slice
    const end = start + dataPerPage; // end index for slice

    const nextData = dummyData.slice(start, end); // get next chunk of data

    // Append new data to existing displayed data
    setDisplayData([...displayData, ...nextData]);

    setPage(nextPage); // update page number
  };

  // ----------------------------
  // 4. Render each item in FlatList
  // ----------------------------
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.name}</Text>
    </View>
  );

  // ----------------------------
  // 5. Footer component for FlatList
  // ----------------------------
  const renderFooter = () => {
    // if all data is loaded, hide button
    if (displayData.length >= dummyData.length) return null;

    return (
      <TouchableOpacity style={styles.loadMoreButton} onPress={loadMore}>
        <Text style={{ color: 'white' }}>Load More</Text>
      </TouchableOpacity>
    );
  };

  // ----------------------------
  // 6. Main render
  // ----------------------------
  return (
    <View style={styles.container}>
      <FlatList
        data={displayData}             // data to render
        keyExtractor={(item) => item.id.toString()} // unique key
        renderItem={renderItem}        // function to render each item
        ListFooterComponent={renderFooter} // show load more button
      />
    </View>
  );
};

export default App;

// ----------------------------
// 7. Styles
// ----------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingTop: 40,
  },
  itemContainer: {
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
  },
  loadMoreButton: {
    padding: 15,
    backgroundColor: 'green',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

/*
===============================
Interview Questions & Answers
===============================

Q1: What is FlatList?
A1: FlatList is a performant component in React Native for rendering long lists. 
It only renders items currently visible on screen, improving performance over ScrollView.

Q2: Difference between FlatList and ScrollView?
A2: ScrollView renders all items at once (heavy for large lists), 
FlatList renders items lazily as they come into view.

Q3: What is keyExtractor in FlatList?
A3: keyExtractor provides a unique key for each list item to help React identify elements during re-render.

Q4: How does pagination work in FlatList?
A4: Maintain a page state and slice the array based on current page and items per page. 
Append new data to the existing state when the user reaches the end or clicks 'Load More'.

Q5: How to optimize FlatList performance?
A5: Use props like initialNumToRender, maxToRenderPerBatch, windowSize, removeClippedSubviews.

Q6: Difference between shallow copy and deep copy in arrays/objects?
A6: Shallow copy copies top-level references only; nested objects/arrays still point to original. 
Deep copy duplicates everything recursively, so changes do not affect the original object.

Q7: How to prevent duplicate items during pagination?
A7: Use a Set or check the item ids before appending new data.

Q8: How to implement infinite scrolling in FlatList?
A8: Use onEndReached and onEndReachedThreshold props to automatically fetch next page when reaching the end.

Q9: Why is immutability important in React state?
A9: React detects changes through reference checks. Mutating arrays/objects directly can prevent re-renders. Always create a new copy.

Q10: How do you combine FlatList with Redux?
A10: Fetch data in Redux store, pass it to FlatList as a prop, and use actions to update state on pagination or refresh.

*/