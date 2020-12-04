Organization of components:
I have two components in my application: FilteredList and DisplayedList. FilteredList contains
filtering, sorting, and aggregator methods. It keeps track of many stateful variables that are
updated when the user makes changes, and trigger updates in the DOM. FilteredList uses 
bootstrap, and specifically builds out the filter and sorting components and the shopping cart
display. DisplayedList, on the other hand, maps each product from App.js to an HTML element 
whose render is triggered in the FilteredList component. DisplayedList uses props that it 
inherits from FilteredList: list, incrementTotal, and cartList. "List" is the immutable list of 
products hard-coded in App.js, "incrementTotal" calls a function that increments the total price 
stored in state, and "cartList" adds any new items 'added to cart' by the user to the list of 
items that is displayed in the "Shopping Cart" componenet.  

How data is passed down through components:
Most of the data needed for this app is passed down using props. The hard-coded list of products
found in App.js is passed as a prop to FilteredList, which then passes the same argument as a 
prop to DisplayedList (which maps each list item to an HTML element). FilteredList also passes
two additional props to DisplayedList: incrementTotal and cartList. These two props are functions
because they require values that can only be accesssed in DisplayedList (since these values exist
at the individual list item level). For example, in order to increment the total cost displayed 
in the Shopping Cart component, we need to be able to access the price of the item that was 
selected by the user. Therefore, when each item's "Add to Cart" button is clicked, these items 
pass their price into a function in DisplayedList that calls the prop function incrementTotal
(still with price as a parameter), and successfully updates the total cost state in FilteredList.
Similarly, in order to update the list of items that the user has in their cart, when a new 
item is added to the user's cart the item passes its name to the same function in DisplayedList
which then calls the prop function cartList. CartList takes this name as an argument and - 
within the FilteredList component - appends this new item to the displayed list of products in
the user's shopping cart. 

How the user trigger state changes:
As previously implied, the user triggers state changes by selecting different filters, sorting
methods, and by adding item to their cart and checking out. When different filters are 
selected, the state in FilteredList is updated to reflect which products should be shown.
Likewise, when a different sorting method is selected from the dropdown, the state in 
FilteredList is updated to sort the products in either ascending or descending order by price.
Additioanlly, when the user adds an item to their cart, state is updated through the passing of
item properties discussed in the previous paragraph to allow the shopping cart to reflect an
accurate total price and an updated list of items that the user has selected for purchase. 
Finally, checking out updates the state to indicate that a message thanking the user for their
purchase should be shown.