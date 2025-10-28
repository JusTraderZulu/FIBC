import { NextRequest, NextResponse } from 'next/server';
import { DBAGCReport, CreateAGCReportRequest, APIResponse } from '@/lib/database-types';

// POST /api/agc-reports - Submit a report to the AGC
export async function POST(request: NextRequest) {
  try {
    const body: CreateAGCReportRequest = await request.json();
    
    // Validation
    if (!body.reporter_name || !body.reporter_email || !body.message || !body.report_type) {
      return NextResponse.json(
        { success: false, error: 'Name, email, report type, and message are required.' },
        { status: 400 }
      );
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.reporter_email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }
    
    // Message validation
    if (body.message.length < 20) {
      return NextResponse.json(
        { success: false, error: 'Report must be at least 20 characters long.' },
        { status: 400 }
      );
    }

    // TODO: Store in database
    // const report = await prisma.agc_report.create({
    //   data: {
    //     reporter_name: body.reporter_name,
    //     reporter_email: body.reporter_email,
    //     report_type: body.report_type,
    //     message: body.message,
    //     is_confidential: body.is_confidential,
    //     status: 'pending',
    //     submitted_at: new Date().toISOString(),
    //     ip_address: request.ip || null,
    //   },
    // });

    // TODO: Send email notification to AGC
    // await sendAGCNotificationEmail(report);

    // PLACEHOLDER: Return success without database
    const response: APIResponse<{ report_id: string }> = {
      success: true,
      data: { report_id: 'placeholder-' + Date.now() },
      message: 'Report submitted successfully. The AGC will review your submission.',
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error submitting AGC report:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit report. Please try again.' },
      { status: 500 }
    );
  }
}

// GET /api/agc-reports - Get reports (Admin only)
export async function GET(request: NextRequest) {
  try {
    // TODO: Add admin authentication
    // if (!isAdmin(request)) {
    //   return NextResponse.json(
    //     { success: false, error: 'Unauthorized' },
    //     { status: 401 }
    //   );
    // }

    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status') as DBAGCReport['status'] | null;
    const page = parseInt(searchParams.get('page') || '1');
    const perPage = parseInt(searchParams.get('per_page') || '20');

    // TODO: Fetch from database
    // const reports = await prisma.agc_report.findMany({
    //   where: { status: status || undefined },
    //   skip: (page - 1) * perPage,
    //   take: perPage,
    //   orderBy: { submitted_at: 'desc' },
    // });

    return NextResponse.json(
      { success: false, error: 'Database not yet configured. This is a placeholder endpoint.' },
      { status: 501 }
    );
  } catch (error) {
    console.error('Error fetching AGC reports:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch reports' },
      { status: 500 }
    );
  }
}

