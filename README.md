# squarespace-cart-fix
# Apply meaningful class name for Squarespace /cart page elements after from the recent updates (February 2021)
Squarespace has distributed their major update to the platform and it removed all the old class name from the /cart page, which means all the old custom code injection (javascript and css) will be no longer affect the cart's page elements. The normal class name has been replaced with strings that have not any meaning to enduser and they will be likely change in near future.
This small snippet was created with the aim to bring back the meaningful class name for the cart page elements, with the help of Squarespace Circle members, the source will be update constantly to match any changes in the cart page (until the platform decides to get rid of the unreadable class name on the page)
## Created with the help of https://forum.squarespace.com/topic/189835-unofficial-documentation-for-cart-page-class-changes/?tab=comments#comment-450473
###### How to install: include the code snippet into Settings->Advanced->Code Injection
`````
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://gitcdn.link/cdn/bangank36/squarespace-cart-fix/45ca005dd050317489753ed5d59c20a645cd94fb/cart.js"></script>
```
