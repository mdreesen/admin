import TeamForm from '@/components/forms/update/TeamForm';   
import { findTeamMember } from '@/actions/team'; 

export default async function Page({ params }: any) {
    const { id } = await params;
    const teamMember = await findTeamMember(id);

  return (
    <>
      <TeamForm data={teamMember} />
    </>
  )
}
