great work!

you can avoid using several addEventListener if they listen to the same event, just need to add the functions you want to call in the callback:)

    removeBtn[index].addEventListener("click" , () => {
      removeProduct();
      calculateAll();
    })
