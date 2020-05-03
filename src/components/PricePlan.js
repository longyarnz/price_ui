import React from 'react';
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';

export default function PricePlan() {
  const switchToBronze = () => console.log('Welcome to Bronze Plan');
  const switchToSilver = () => console.log('Welcome to Silver Plan');
  const switchToGold = () => console.log('Welcome to Gold Plan');

  return (
    <div>
      <PricingTable highlightColor='#1976D2'>
        <PricingSlot highlighted buttonText='Current Plan' title='FREE' priceText='₦0/month'>
          <PricingDetail> <b>15</b> projects</PricingDetail>
          <PricingDetail> <b>5 GB</b> storage</PricingDetail>
          <PricingDetail> <b>5</b> users</PricingDetail>
          <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
        </PricingSlot>
        <PricingSlot onClick={switchToBronze} buttonText='UPGRADE' title='Bronze' priceText='₦24/month'>
          <PricingDetail> <b>35</b> projects</PricingDetail>
          <PricingDetail> <b>15 GB</b> storage</PricingDetail>
          <PricingDetail> <b>Unlimited</b> users</PricingDetail>
          <PricingDetail> <b>Time tracking</b></PricingDetail>
        </PricingSlot>
        <PricingSlot onClick={switchToSilver} buttonText='UPGRADE' title='Silver' priceText='₦99/month'>
          <PricingDetail> <b>100</b> projects</PricingDetail>
          <PricingDetail> <b>30 GB</b> storage</PricingDetail>
          <PricingDetail> <b>Unlimited</b> users</PricingDetail>
          <PricingDetail> <b>Time tracking</b></PricingDetail>
        </PricingSlot>
        <PricingSlot onClick={switchToGold} buttonText='UPGRADE' title='Gold' priceText='₦200/month'>
          <PricingDetail> <b>Unlimited</b> projects</PricingDetail>
          <PricingDetail> <b>75 GB</b> storage</PricingDetail>
          <PricingDetail> <b>Unlimited</b> users</PricingDetail>
          <PricingDetail> <b>Time tracking</b></PricingDetail>
        </PricingSlot>
      </PricingTable>
    </div>
  )
}
