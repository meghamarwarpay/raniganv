'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
// import { Spinner } from '@/components/ui/spinner';


import { apiGet } from '@/api/apiMethods';
import InvoiceTemplate from '@/Components/Product/Invoice';


export default function InvoicePage({ orderId }) {
  const router = useRouter();
  // const { orderId } = router.query;
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (orderId) {
      fetchOrder();
    }
  }, [orderId]);

  const fetchOrder = async () => {
    try {
      const response = await apiGet(`api/order4/orders4/${orderId}`);
      setOrder(response.data.order);
    } catch (error) {
      console.error('Error fetching order:', error);
    } finally {
      setLoading(false);
    }
  };

  const generatePDF = async () => {
    const element = document.getElementById('invoice');
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        logging: false,
        useCORS: true,
      });

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pdf = new jsPDF('p', 'mm', 'a4');

      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`invoice-${orderId}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        {/* <Spinner /> */}
      </div>
    );
  }

  if (!order) {
    return <div className="text-center p-8">Order not found</div>;
  }

  return (
    <div className="">
      <div className="max-w-[800px] mx-auto" style={{marginTop:'10%'}}>
        <button onClick={generatePDF} className="mb-4 btnprimary" style={{color:'#fff',padding:'10px',borderRadius:'2em'}}>
          Download PDF
        </button>
      </div>

      <div id="invoice">
        <InvoiceTemplate order={order} />
      </div>
    </div>
  );
}
