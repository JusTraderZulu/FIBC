import { NextRequest, NextResponse } from 'next/server';
import { DBSecretariat, APIResponse } from '@/lib/database-types';

// GET /api/secretariats - List all secretariats
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const pillar = searchParams.get('pillar'); // Filter by pillar number
    const status = searchParams.get('status') as DBSecretariat['status'] | null;

    // TODO: Replace with actual database query
    // const secretariats = await prisma.secretariat.findMany({
    //   where: {
    //     parent_pillar: pillar ? parseInt(pillar) : undefined,
    //     status: status || 'active',
    //   },
    //   include: {
    //     head_member: true, // Include member details
    //   },
    //   orderBy: { name: 'asc' },
    // });

    // PLACEHOLDER: Return empty array
    const response: APIResponse<DBSecretariat[]> = {
      success: true,
      data: [],
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching secretariats:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch secretariats' },
      { status: 500 }
    );
  }
}

// GET /api/secretariats/[id] - Get single secretariat
// This would be in /api/secretariats/[id]/route.ts


