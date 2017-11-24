import Authorization from './Auth/AuthorizationHOC'

const AllowAll = Authorization(['admin', 'hr', 'employee', 'partner'])
const AllowPartner = Authorization(['partner'])

const Deals = () => <h2>Deals</h2>
const DealsAdd = () => <h2>Add Deals</h2>
const Profile = () => <h2>Profile</h2>

const Routes = {
  employee: [
    {
      path: '/deals',
      component: AllowAll(Deals),
      routes: [
        {
          path: '/deals/add',
          component: AllowPartner(DealsAdd)
        },
        {
          path: '/deals/edit',
          component: AllowAdmin(DealsAdd)
        }
      ]
    },
    {
      path: '/profile',
      component: AllowAll(Profile)
    }
  ],
  partner: [
    {
      path: '/deals',
      component: AllowAll(Deals),
      routes: [
        {
          path: '/deals/add',
          component: AllowPartner(DealsAdd)
        },
        {
          path: '/deals/edit',
          component: AllowAdmin(DealsAdd)
        }
      ]
    },
    {
      path: '/profile',
      component: AllowAll(Profile)
    }
  ]
}