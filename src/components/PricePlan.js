import React from 'react';
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';

export default function PricePlan() {
  const submit = () => console.log('Plan submitted!');

  return (
    <div>
      <PricingTable highlightColor='#1976D2'>
        <PricingSlot onClick={submit} buttonText='TRY IT FREE' title='FREE' priceText='$0/month'>
          <PricingDetail> <b>15</b> projects</PricingDetail>
          <PricingDetail> <b>5 GB</b> storage</PricingDetail>
          <PricingDetail> <b>5</b> users</PricingDetail>
          <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
        </PricingSlot>
        <PricingSlot highlighted onClick={submit} buttonText='SIGN UP' title='BASIC' priceText='$24/month'>
          <PricingDetail> <b>35</b> projects</PricingDetail>
          <PricingDetail> <b>15 GB</b> storage</PricingDetail>
          <PricingDetail> <b>Unlimited</b> users</PricingDetail>
          <PricingDetail> <b>Time tracking</b></PricingDetail>
        </PricingSlot>
        <PricingSlot onClick={submit} buttonText='SIGN UP' title='PROFESSIONAL' priceText='$99/month'>
          <PricingDetail> <b>100</b> projects</PricingDetail>
          <PricingDetail> <b>30 GB</b> storage</PricingDetail>
          <PricingDetail> <b>Unlimited</b> users</PricingDetail>
          <PricingDetail> <b>Time tracking</b></PricingDetail>
        </PricingSlot>
        <PricingSlot onClick={submit} buttonText='SIGN UP' title='ENTERPRISE' priceText='$200/month'>
          <PricingDetail> <b>Unlimited</b> projects</PricingDetail>
          <PricingDetail> <b>75 GB</b> storage</PricingDetail>
          <PricingDetail> <b>Unlimited</b> users</PricingDetail>
          <PricingDetail> <b>Time tracking</b></PricingDetail>
        </PricingSlot>
      </PricingTable>
    </div>
  )
}
