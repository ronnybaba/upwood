"use client"
import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import AuthTextSlider from "@/components/authTextSlider";
import Button from "@/components/button";
export default function Login() {
  const [inviteSuccess, setinviteSuccess] = useState(false);
  const whenloginbuttonhit = () => {

  } 
  const whenrequestinvitationbuttonhit = () => {

  }  
  const backtologinbuttonhit = () => {
    setinviteSuccess(false)
  }
  const sliderdata = [
      {
          title : "Grow your wealth<br/>with sustainable<br/>investments",
          description : "On our platform you can becomea co-owner<br/>of real world forests by buying forest<br/>backed shares or invest in bonds backed<br/>up by forest plantations and carbon credits."
      },
      {
          title : "Earn dividends<br/>or offset your<br/>emissions",
          description : "During the investment period you can earn<br/>dividends from forestry related income,<br/>carbon credit sales or choose to claim carbon<br/>credits to offset your emissions."
      },
      {
          title : "Earn NFTs",
          description : "Every investor gets unique NFT<br/>collectibles representing forests planted.<br/>Every NFT collectible is unique and can<br/>be traded or held for additional benefits."
      }
  ]
  return (
    <>
      <AuthTextSlider data={sliderdata} />  
      <div className="auth-work">
        <div className='logo'>
          <Image
            src={'/Logo.svg'}
            alt=""
            width={176}
            height={38}
            priority
          />
        </div>
        <div className='divider'></div>

        {inviteSuccess ?
        <div>
          <div className="image"><img src="/Group-1000003068.svg" /></div>
          <div className="center-text biger bold">Success</div>
          <div className="space-30"></div>
          <div className="center-text">We have recieved your<br />
          invitation request!</div>
          <div className="space-30"></div>
          <div className="center-text big">Please check your e-mail</div>
          <div className="space-30"></div>
          <div>
              <Button icon={'/Vector.svg'} text ={'BACK TO LOGIN'} link={''} active={false} call={backtologinbuttonhit}  />
          </div>
          <div className='divider'></div>
        </div>
        : 
        <div>
          <div className='heading'>User login</div>
          <div className="field mrbottom">
              <input type="text" placeholder="Enter email address" className="textField style2"  />
          </div>
          <div className="field mrbottom">
              <p className="text-align-right error">Your wallet balance is not sufficient to buy shares. Please add funds to your wallet.</p>
              <input type="text" placeholder="Enter your password" className="textField style2 error"  />
          </div>
          <div>
              <Button style={'style2'} text ={'LOG IN'} link={''} active={true} call={whenloginbuttonhit}  />
          </div>
          <div className="forgotlink"><Link href="/forgot-password">Forgot Password</Link></div>
          <div className='divider'></div>
          <div className='heading'>Not a user? Request invitation</div>
          <div className="field mrbottom">
              <input type="text" placeholder="Enter email address" className="textField style2"  />
          </div>
          <div className="field mrbottom">
            <div className="checkbox">
              <input type="checkbox" id='terms' />
              <label htmlFor="terms" className="no-center-mobile"><span>By entering your email you agree to receive marketing communications from SIA Upwood. You can unsubscribe at any time. For more information, see our <a href=''>Privacy Policy</a>.</span></label>
            </div>
          </div>
          <div>
              <Button style={'style2'} text ={'REQUEST INVITATION'} link={''} active={true} disabled={true} call={whenrequestinvitationbuttonhit}  />
          </div>
        </div>
        }
      </div>
    </>
  );
}
