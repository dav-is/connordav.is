import { Card as AuthenticyPlatformCard } from '../../pages/projects/authenticy-platform'

export default () => <div className='cards'>
  <AuthenticyPlatformCard />
  <style jsx>{`
    .cards {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: space-evenly;
    }
  `}</style>
</div>