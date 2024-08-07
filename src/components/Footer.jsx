import React from 'react'

function Footer({ items }) {
  if (!items.length)
    return (
      <p className="footerr">
        Welcome to Take to Trip . Start adding some items to your packing list
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  
  return (
    <footer className='footerr'>
      {percentage === 100
        ? `you got everything! Ready to go ✈️`
        : `You have ${numItems} itmes on your list , and you aleready packed 
      ${numPacked} (${percentage}%)`}
    </footer>
  )
}

export default Footer
