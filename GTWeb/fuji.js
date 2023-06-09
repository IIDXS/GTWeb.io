
//popup when user clicks corner.

function showcornerinfo(buttonClass){
    console.log('showcornerinfo() called');
    console.log('yay');
    var popupcontainer = document.querySelector('.popupcontainer');
    popupcontainer.innerHTML = "";
    

    var sectionContent = "";
    if (buttonClass === "TGR") {
    sectionContent = `
      <div class="infocenter">
        <div class="left">
          <img class="image" src="Gran Turismo® 7_20230607221042.jpg" alt="TGR Image">
        </div>
        <div class="right">
          <h2 class="turnname">Turn 1-2 (TGR corner)</h2>
          <p class="desc">Fuji Speedway's first corner, the TGR corner, comes at the end of the circuit's famous 1.475 km long straight. As such, you will be approaching the turn at a high speed. Brake when the grandstands on the left start, and turn in whilst trailbraking once your car has passed the horizontal line on the track. Once you reach the apex, go up to second gear and carefully accelerate as soon as possible. The circuit goes down hill from here, so exiting this corner well can give you lots of time.</p>
        </div>
      </div>`;
    } else if (buttonClass === "CocaCola") {
      sectionContent = `
      <div class="infocenter">
        <div class="left">
          <img class="image" src="Gran Turismo® 7_20230607221056.jpg" alt="TGR Image">
        </div>
        <div class="right">
          <h2 class="turnname">Turn 3 (CocaCola)</h2>
          <p class="desc">The CocaCola corner is a sharp left-hander that is to be taken as quickly as possible. Use the 
          small orange square after the 100m board as your braking and turning point. Quickly turn the car into the corner whilst easing off the brakes
          and maintaining speed. Take advantage of the inside curbing at the apex and accelerate out of the corner. Be careful to not apply too much steering
          at this point as it may cause you to understeer beyond the outer curbing.</p>
        </div>
      </div>`;
    }
    else if (buttonClass === "ToyoPet") {
      sectionContent = `
      <div class="infocenter">
        <div class="left">
          <img class="image" src="Gran Turismo® 7_20230607221111.jpg" alt="TGR Image">
        </div>
        <div class="right">
          <h2 class="turnname">Turn 4-5 (ToyoPet)</h2>
          <p class="desc">Immediately after the CocaCola corner is a long and drawn out right-hander named ToyoPet corner, sometimes called 100R.
          Hug the inside for the first part of the corner. After passing a small passage on the right, the corner slightly decreases in radius,
          and you will notice the grass on the right go aaway from you. At this point, lift off the throttle, going down a gear if needed, and maintain your steering
          angle to stay close to the inside part of the corner. Control the throttle to maintain speed until you reach another passage on the right, where you will be back
          on full throttle and set yourself up for the upcoming turn.</p>
        </div>
      </div>`;
    }
    else if (buttonClass === "ADVAN") {
    sectionContent = `
      <div class="infocenter">
        <div class="left">
          <img class="image" src="Gran Turismo® 7_20230607221132.jpg" alt="TGR Image">
        </div>
        <div class="right">
          <h2 class="turnname">Turn 6-9 (ADVAN)</h2>
          <p class="desc">ADVAN is a sharp hairpin that leads to Fuji's back straight. You will be on the middle or outer part of the track when
          entering the corner. Use the small orange square after the 100 meter board as your braking point, and turn in once you go under the WAKOS sign, easing off the brakes.
          Start to accelerate once you reach the apex. You will be accelerating while turning, so shift up to third gear and gradually apply the throttle to
          ensure that you do not get wheelspin.</p>
        </div>
      </div>`;
    }
    else if (buttonClass === "Dunlop") {
    sectionContent = `
      <div class="infocenter">
        <div class="left">
          <img class="image" src="Gran Turismo® 7_20230607221203.jpg" alt="TGR Image">
        </div>
        <div class="right">
          <h2 class="turnname">Turn 10-12 (Dunlop Chicane)</h2>
          <p class="desc">The Dunlop chicane marks the start of the third sector of Fuji, a technical, 35m ascent that is the most difficult section of the track, and where most of your time can be found.
          Brake once you go under the Dunlop sign, downshift down to first gear and turn into the apex using the small horizontal line on your left as your turning point. For the second apex of the chicane,
          approach it on 2nd gear and lift off the throttle completely once you reach it. Exit out of the chicane in a straight line, carefully applying the throttle. It is important to get the chicane right, as you can
          shave off plenty of time and improve your approach for the next few corners.</p>
        </div>
      </div>`;
    }
    else if (buttonClass === "Corner13") {
    sectionContent = `
      <div class="infocenter">
        <div class="left">
          <img class="image" src="Gran Turismo® 7_20230607221226.jpg" alt="TGR Image">
        </div>
        <div class="right">
          <h2 class="turnname">Turn 13</h2>
          <p class="desc">This unnamed corner is the first of the last three corners that make up Fuji Speedway. When the dark green run-off area starts, use partial braking to steer the car towards the apex. The apex is on a crest of a hill,
          so when you reach it, stay on partial throttle until you have completely gone over the crest, and hug the inside curbs to set yourself up for the GRSupra hairpin.</p>
        </div>
      </div>`;
    }
    else if (buttonClass === "GRSupra") {
    sectionContent = `
      <div class="infocenter">
        <div class="left">
          <img class="image" src="Gran Turismo® 7_20230607221245.jpg" alt="TGR Image">
        </div>
        <div class="right">
          <h2 class="turnname">Turn 14-15 (GRSupra corner</h2>
          <p class="desc">The GRSupra corner is an uphill corner that gets progressively tighter, making it difficult to find an optimal line. At the end of the curbs on the left, control your braking whilst heading toward
          the outer part of the track, whilst also controllably downshifting to first gear. After that, get to second gear, maintain partial throttle and set your apex late into the corner, and carefully accelerate once you reach it.
          Maintaining a decent speed and careful braking/steering control is important, as you risk understeering or spinning out, losing a lot of time in the process. Try controlling your downshifts in such a way that it can help the car
          turn in easier.</p>
        </div>
      </div>`;
    }
    else if (buttonClass === "Panasonic") {
    sectionContent = `
      <div class="infocenter">
        <div class="left">
          <img class="image" src="Gran Turismo® 7_20230607221337.jpg" alt="TGR Image">
        </div>
        <div class="right">
          <h2 class="turnname">Turn 16 (Panasonic corner)</h2>
          <p class="desc">The final corner of Fuji Speedway, Panasonic, is similar to the GRSupra Corner, and should be approached in the same manner. This turn leads you back down the track's long
          start/finish straight, so getting a good exit is especially important to get a good laptime. Two orange barriers can be seen on the left on your way to the corner. Once the second one goes
          out of sight, control your braking, steering and downshifting to get to the outside of the corner and eventually a late apex. Fully accelerate when your car faces the Bridgestone arch.</p>
        </div>
      </div>`;
    }

    
    popupcontainer.innerHTML = sectionContent;
    popupcontainer.scrollIntoView();
  }

  



