import React from 'react';
import _ from 'lodash';

document.addEventListener("DOMContentLoaded", function(event) { 
  const searchInput = document.getElementById("search");
    let qalist = []
    const q1 = document.getElementById('1').textContent;
    const q2 = document.getElementById('2').textContent;
    const q3 = document.getElementById('3').textContent;
    const q4 = document.getElementById('4').textContent;
    const q5 = document.getElementById('5').textContent;
    const q6 = document.getElementById('6').textContent;
    const q7 = document.getElementById('7').textContent;
    qalist.push({id:1,content:q1},
      {id:2,content:q2},{id:3,content:q3},
      {id:4,content:q4},{id:5,content:q5},
      {id:6,content:q6},{id:7,content:q7})
    console.log(qalist)
    searchInput.addEventListener("input", e => {
      const value = e.target.value.toLowerCase()
      qalist.forEach(qa => {
        var x = document.getElementById(qa.id);
        if(!qa.content.toLowerCase().includes(value)){
          x.style.display = "none"
        }else {
          x.style.display = "block"
        }
      })
      
    })
});








export function FaqScreen() {
  

  return (
    <section className="content-box">
      <div className="searchbox">
        <form>
            <input type="text" placeholder=" Search for answers" name="search" id="search"/>
            <button type="submit" class="btn btn-outline-primary">Search</button>
        </form>
      </div>

      <div className="error-box" id="error">
        <p className='bold'>
          Sorry! No result found.
        </p>
        <p>Please try searching again using different words.</p>
      </div>


      
      <p className="categories-title">Frequently Asked Questions</p>
      
      <div className="text-box" id="2">
        <div className="question" id="q2">
        What about my other electronics?
        </div>
        <p id="a2">
          Recycling locations for covered electronic products may also take peripherals (such as mice, keyboards, speakers, printers, and scanners), cell phones, MP3 players, game consoles, and DVD players. Check 
          <a href="http://1800recycle.wa.gov/"> 1-800 RECYCLE.</a> and call ahead to see what items a recycler will accept. To find electronics recyclers near you, visit 
          <a href="http://1800recycle.wa.gov/"> 1-800 RECYCLE.</a>
        </p>
      </div>

      <div className="text-box" id="3">
        <div className="question" id="q3">
        Why recycle electronics?
        </div>
        <p id="a3">
          Many electronic devices, especially TVs and computers, contain toxic materials such as lead, cadmium and mercury. 
          Reusing and recycling electronics keeps these toxic materials out of our landfills and incinerators and also recovers valuable resources.
          Electronics collected through E-Cycle are taken apart and separated into materials such as glass, plastic, 
          metal and toxic chemicals. All recycling follows performance standards set up by the Department of Ecology.
        </p>
      </div>

          
      
      <div className="text-box" id="4"> 
        <div className="question" id="q4">
          What if my recycle equipment still works?
        </div>
        <p id="a4">
          Before you get rid of your old TV, computer, or other electronic device, you can check out a website like ifixit.com for tips on how to upgrade or repair it.
          <a href="https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P1000715.PDF"> Do the PC Thing: Donate</a> 
          - Information from the Environmental Protection Agency (EPA) on donating your computer for reuse.
        </p>
      </div>

          
        
      <div className="text-box" id="5">
        <div className="question" id="q5">
          What is banned from the landfill?
        </div>
        <p id="a5">
          Almost any product with a circuit board is now banned from the landfill and considered universal waste and, as such, 
          requires special handling. Like used motor oil and paint, universal waste is a kind of hazardous waste.
        </p>
      </div>

          
      <div className="text-box" id="6">
        <p>
          <div className="question" id="q6">
            Where can I find computer manufacturer's exchanges, takebacks, and recycling information?
          </div>
          <ul id="a6">
            <li><a href="http://content.dell.com/us/en/corp/cr-dell-earth-recycling.aspx">Dell Computer Exchange</a></li>
            <li><a href="http://www.hp.com/go/recycle">HP Computer Exchange</a></li>
            <li><a href="http://www.gateway.com/gw/en/US/content/recycling">Gateway Computer Exchange</a></li>
            <li><a href="http://www.apple.com/environment/">Apple Computer Exchange</a></li>
          </ul>
        </p>
      </div>

      <p className='categories-title'>Accepted Electronics</p> 
      <div className="text-box" id="1">
        <div className="question" id="q1">
        What Can I typically recycle for free? 
        </div>   
        <p id="a1">                                                                               
          <ul>
            <li>Televisions</li>
            <li>Computers</li>
            <li>Laptops</li>
            <li>Monitors</li>
            <li>Tablets</li>
            <li>E-readers</li>
            <li>Portable DVD players</li>
          </ul>
        </p>
      </div>


      <p className='categories-title'>Additional Information</p> 
      <div className="text-box" id="7">
          <div className="question" id="q7">
            Where can I find additional information?
          </div>
          <p id="a7">
          <a href=" https://www.epa.gov/recycle/electronics-donation-and-recycling">U.S. Environmental Protection Agency</a>
          </p>
      </div>
      <footer>
          <p>Copyright &copy; 2022 INFO 442 Group D</p>
          <p>Contact Info: Dawgs-E-Cycling </p>
      </footer>
    </section>
    
  );
}