import React from 'react';
import _ from 'lodash';

export function FaqScreen() {
  return (
    <section className="content-box">
      <div className="searchbox">
        <form>
            <input type="text" placeholder=" Search for answers" name="search"/>
            <button type="submit">Submit</button>
        </form>
      </div>


      <div className="text-box">
        <span className="question">
        What Can I typically recycle for free? 
        </span>   
        <p>                                                                               
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

      <div className="text-box">
        <span className="question">
        What about my other electronics?
        </span>
        <p>
          Recycling locations for covered electronic products may also take peripherals (such as mice, keyboards, speakers, printers, and scanners), cell phones, MP3 players, game consoles, and DVD players. Check 
          <a href="http://1800recycle.wa.gov/">1-800 RECYCLE.</a> and call ahead to see what items a recycler will accept. To find electronics recyclers near you, visit 
          <a href="http://1800recycle.wa.gov/">1-800 RECYCLE.</a>
        </p>
      </div>

      <div className="text-box">
        <span className="question">
        Why recycle electronics?
        </span>
        <p>
          Many electronic devices, especially TVs and computers, contain toxic materials such as lead, cadmium and mercury. 
          Reusing and recycling electronics keeps these toxic materials out of our landfills and incinerators and also recovers valuable resources.
          Electronics collected through E-Cycle are taken apart and separated into materials such as glass, plastic, 
          metal and toxic chemicals. All recycling follows performance standards set up by the Department of Ecology.
        </p>
      </div>

          
      
      <div className="text-box">
        <span className="question">
          What if my recycle equipment still works?
        </span>
        <p>
          Before you get rid of your old TV, computer, or other electronic device, you can check out a website like ifixit.com for tips on how to upgrade or repair it.
          <a href="https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P1000715.PDF">Do the PC Thing: Donate</a> 
          - Information from the Environmental Protection Agency (EPA) on donating your computer for reuse.
        </p>
      </div>

          
        
      <div className="text-box">
        <span className="question">
          What is banned from the landfill?
        </span>
        <p>
          Almost any product with a circuit board is now banned from the landfill and considered universal waste and, as such, 
          requires special handling. Like used motor oil and paint, universal waste is a kind of hazardous waste.
        </p>
      </div>

          
      <div className="text-box">
        <p>
          <span className="question">
            Where can I find computer manufacturer's exchanges, takebacks, and recycling information?
          </span>
          <ul>
            <li>  Dell Computer Exchange - <a href="http://content.dell.com/us/en/corp/cr-dell-earth-recycling.aspx">http://content.dell.com/us/en/corp/cr-dell-earth-recycling.aspx</a></li>
            <li>HP Computer Exchange - <a href="http://www.hp.com/go/recycle">http://www.hp.com/go/recycle</a></li>
            <li>Gateway Computer Exchange - <a href="http://www.gateway.com/gw/en/US/content/recycling">http://www.gateway.com/gw/en/US/content/recycling</a></li>
            <li>Apple Computer Exchange - <a href="http://www.apple.com/environment/">http://www.apple.com/environment/</a></li>
          </ul>
        </p>
      </div>


          
      <div className="text-box">
        <p>
          <span className="question">
            Where can I find additional information?
          </span>
          U.S. Environmental Protection Agency  - <a href=" https://www.epa.gov/recycle/electronics-donation-and-recycling"> https://www.epa.gov/recycle/electronics-donation-and-recycling</a>
        </p>
      </div>
      <footer>
          <p>Copyright &copy; 2022 INFO 442 Group D</p>
          <p>Contact Info: Dawgs-E-Cycling </p>
      </footer>
    </section>
  );
}