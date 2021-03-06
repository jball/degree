import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { getSearchUrl } from '../../helpers/searchUrl';
import './styles.scss';

const Breadcrumb: FunctionComponent<BreadcrumbInterface> = ({
  tag,
  pageTitle,
  searchResultPath,
}) => {
  return (
    <section className="bp-breadcrumb">
      <div className="bp-container">
        <ul className="bp-breadcrumb-items">
          <li className="bp-breadcrumb-item">
            <Link to={'/'} className="bp-breadcrumb-link">
              Home
            </Link>
          </li>
          <li className="divider" aria-hidden="true">
            /
          </li>
          {tag && (
            <>
              <li className="bp-breadcrumb-item">
                <Link
                  to={getSearchUrl(
                    searchResultPath,
                    tag.tagCategory.name,
                    'tags.tagCategory.name'
                  )}
                  className="bp-breadcrumb-link"
                >
                  {tag.tagCategory.name}
                </Link>
              </li>
              <li className="divider" aria-hidden="true">
                /
              </li>
              <li className="bp-breadcrumb-item">
                <Link
                  to={getSearchUrl(searchResultPath, tag.name, 'tags.name')}
                  className="bp-breadcrumb-link"
                >
                  {tag.name}
                </Link>
              </li>
              <li className="divider" aria-hidden="true">
                /
              </li>
            </>
          )}
          <li className={classNames('bp-breadcrumb-item', 'is-active')}>
            {pageTitle}
          </li>
        </ul>
      </div>
    </section>
  );
};

interface BreadcrumbInterface {
  tag?: any;
  pageTitle: string;
  searchResultPath?: string;
}

export default Breadcrumb;
