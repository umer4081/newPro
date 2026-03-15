import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';

const App = () => {
  const data = [
    {
      id: 1,
      items: [
        { name: 'Item A', amount: 10 },
        { name: 'Item B', amount: 20 },
      ],
    },
    {
      id: 2,
      items: [
        { name: 'Item C', amount: 5 },
        { name: 'Item D', amount: 15 },
      ],
    },
  ];

  const pagTEst = [
    { name: 'Item 1', amount: 10 },
    { name: 'Item 2', amount: 10 },
    { name: 'Item 3', amount: 10 },
    { name: 'Item 4', amount: 10 },
    { name: 'Item 5', amount: 10 },
    { name: 'Item 6', amount: 10 },
    { name: 'Item 7', amount: 10 },
    { name: 'Item 8', amount: 10 },
    { name: 'Item 9', amount: 10 },
    { name: 'Item 10', amount: 10 },
    { name: 'Item 11', amount: 10 },
    { name: 'Item 12', amount: 10 },
    { name: 'Item 13', amount: 10 },
    { name: 'Item 14', amount: 10 },
    { name: 'Item 15', amount: 10 },
  ];

  // ======== Calculate total amount (Method 1) ========
  const totsllll = data.reduce((sum, obj) => {
    const inner = obj.items.reduce((inn, item) => inn + item.amount, 0);
    return sum + inner;
  }, 0);

  // ======== Calculate total amount (Method 2) ========
  const allAmounts = data.flatMap(obj => obj.items.map(item => item.amount));
  const alll = allAmounts.reduce((sum, num) => sum + num, 0);

  // ======== Pagination Setup ========
  const pageSize = 3;                    // How many items to load per page
  const [page, setPage] = useState(0);   // Current page number
  const [listData, setListData] = useState([]);  // Items currently displayed

  // Load first page automatically
  useEffect(() => {
    // loadMore();
  }, []);

  const loadMore = () => {
    console.log(page,'pagepage')
    const start = page * pageSize;           // Start index for slice
    // console.log(start, 'startstart')
    const end = start + pageSize;            // End index for slice
    // console.log(end,'end')
    const newItems = pagTEst.slice(start, end); // from to 

    if (newItems.length === 0) return;      // Stop if no more items

    setListData(prev => [...prev, ...newItems]);  // Append new items
    setPage(prev => prev + 1);                    // Increment page
  };

  // Render each item in FlatList
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text>Amount: {item.amount}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, }}>
      <FlatList
        data={listData}
        // The array of items to display in the list.                                    
        // Use case: always provide the current list/page of data you want to render.

        renderItem={renderItem}
        //  Prop Function returning the UI for each item.
        // Use case: define how each item should look.
        keyExtractor={(item, index) => index.toString()}
        //  Prop Returns a unique key for each item.
        // Use case: required for efficient React updates.
        // For dynamic data, use a unique ID instead of index.

        onEndReached={loadMore} //Prop
        // Prop  Function that runs when the user scrolls near the bottom.
        // Use case: implement pagination/load more on scroll.

        onEndReachedThreshold={0.5}
        // Prop Number between 0 and 1 controlling when onEndReached triggers.
        // 0 = trigger at exact bottom, 0.5 = trigger 50% before bottom, 1 = trigger one screen before bottom.
        // Use case: smooth scrolling, preload next page.

        ListFooterComponent={() =>
          listData.length < pagTEst.length ? <ActivityIndicator size="small" /> : null
        }
      //  Prop Component shown at bottom of list.
      // Use case: show spinner while loading more items.
      // Returns null if no more items to load.
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    height: 200,
  },
  itemName: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black'
  },
});